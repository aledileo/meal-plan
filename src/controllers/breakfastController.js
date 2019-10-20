const Breakfast = require('../models/breakfastModel');

exports.get = async (req, res) => {
  try {
    const randomBreakfast = await Breakfast.aggregate([
      { $sample: { size: 1 } },
    ]);
    res.json(randomBreakfast);
  } catch (e) {
    res.status(500).send('Oops!');
  }
};
