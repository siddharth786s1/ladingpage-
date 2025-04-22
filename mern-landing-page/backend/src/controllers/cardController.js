const Card = require('../models/Card');

// Fetch all cards from the database
exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find().limit(10); // Limit to 10 cards
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cards', error });
    }
};

// Create a new card (if needed in the future)
exports.createCard = async (req, res) => {
    const { name, photo, place, genre } = req.body;

    const newCard = new Card({
        name,
        photo,
        place,
        genre,
    });

    try {
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (error) {
        res.status(500).json({ message: 'Error creating card', error });
    }
};