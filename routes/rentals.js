const express = require('express');
const router = express.Router();
const rentalsController = require('../controllers/rentals');

router.get('', rentalsController.getAllRentals);
router.get('/:id', rentalsController.getRentalById);

module.exports = router;
