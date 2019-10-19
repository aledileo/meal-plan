require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose')
const chalk = require('chalk');
const Breakfast = require('../models/breakfastModel')

const acceptedCollections = {
  'breakfasts': Breakfast,
  'lunches': null,
  'snacks': null,
  'dinners': null
}

let rawdata;

try {
  rawdata = fs.readFileSync(__dirname + '/../../data.json');
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error(
      chalk.red("Sorry! This script needs data.json to be at the top level of the project")
    );
    process.exit(0)
  }
}

let data = JSON.parse(rawdata);

// console.log(data);

mongoose.connect(process.env.MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open', async () => {
  for (const index in Object.keys(acceptedCollections)) {
    const collection = Object.keys(acceptedCollections)[index];
    try {
      await db.collection(collection).deleteMany({})
      if (data[collection]) {
        for (const document of data[collection]) {
          if (acceptedCollections[collection]) {
            const newDocument = await acceptedCollections[collection].create({
              _id: null,
              food: document.food
            })
          }
      }
      }
    } catch(e) {
      console.log(e)
    }
  }
})
// TODO: Figure out how to disconnect properly
// mongoose.disconnect()