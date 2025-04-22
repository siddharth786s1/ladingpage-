const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// Route to get all cards
router.get('/', cardController.getAllCards);

// Route to create a new card
router.post('/', cardController.createCard);

// Route to get a specific card by ID
router.get('/:id', cardController.getCardById);

// Route to update a specific card by ID
router.put('/:id', cardController.updateCardById);

// Route to delete a specific card by ID
router.delete('/:id', cardController.deleteCardById);

module.exports = router;