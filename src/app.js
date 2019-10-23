require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const breakfast = require('./routes/breakfastRoute');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/breakfast', breakfast);

app.get('/', (req, res) => {
  res.send('Hi!');
});

mongoose.connect(process.env.MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT);
