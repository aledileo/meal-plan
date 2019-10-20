/* eslint-disable */
const fs = require('fs');
const mongoose = require('mongoose');
const chalk = require('chalk');
const Breakfast = require('../models/breakfastModel');

const acceptedCollections = {
  breakfasts: Breakfast,
  lunches: null,
  snacks: null,
  dinners: null,
};

let rawdata;

try {
  rawdata = fs.readFileSync(`${__dirname}/../../data.json`);
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error(
      chalk.red('Sorry! This script needs data.json to be at the top level of the project'),
    );
    process.exit(0);
  }
}

const data = JSON.parse(rawdata);

mongoose.connect(process.env.MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  for (const index in Object.keys(acceptedCollections)) {
    const collection = Object.keys(acceptedCollections)[index];
    try {
      await db.collection(collection).deleteMany({});
      if (data[collection]) {
        for (const document of Object.values(data[collection])) {
          if (acceptedCollections[collection]) {
            await acceptedCollections[collection].create({
              _id: null,
              food: document.food,
            });
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
});
// TODO: Figure out how to disconnect properly
// mongoose.disconnect()
