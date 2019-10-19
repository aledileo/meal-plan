const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const breakfastSchema = new Schema({
  _id: Schema.Types.ObjectId,
  food: [String]
});

const Breakfast = mongoose.model('Breakfast', breakfastSchema);

module.exports = Breakfast;