const mongoose = require('mongoose');
const foodSchemaDefinition = require('./foodSchemaDefinition');

const breakfastSchema = new mongoose.Schema(foodSchemaDefinition);

const Breakfast = mongoose.model('Breakfast', breakfastSchema);

module.exports = Breakfast;
