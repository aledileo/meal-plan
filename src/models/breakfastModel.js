const mongoose = require('mongoose');

const { Schema } = mongoose;
const foodSchemaDefinition = require('./foodSchemaDefinition');

const breakfastSchema = new Schema(foodSchemaDefinition);

const Breakfast = mongoose.model('Breakfast', breakfastSchema);

module.exports = Breakfast;
