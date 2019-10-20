const { ObjectId } = require('mongoose').Schema.Types;

const foodSchemaDefinition = {
  _id: ObjectId,
  food: [String],
};

module.exports = foodSchemaDefinition;
