const ObjectId = require('mongoose').Schema.Types.ObjectId;

const foodSchemaDefinition = {
  _id: ObjectId,
  food: [String]
}

module.exports = foodSchemaDefinition;