const router = require('express').Router();
const breakfastController = require('../controllers/breakfastController');

router.route('/')
  .get(breakfastController.get);

module.exports = router;
