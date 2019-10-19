require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const breakfast = require('./routes/breakfastRoute');

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(bodyParser.json());
app.use('/breakfast', breakfast)

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});