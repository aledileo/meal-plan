const Breakfast = require('../models/breakfastModel');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

exports.get = async (req, res) => {
  try {
    const randomBreakfast = await Breakfast.aggregate([
      { $sample: { size: 1 } }
    ]);
    res.json(randomBreakfast)
  } catch (e) {
    console.error(e)
    res.status(500).send('Oops!')
  }
};