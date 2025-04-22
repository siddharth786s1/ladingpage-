import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cards'; // Adjust the URL as needed

// Function to fetch the list of cards
export const fetchCards = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

// Function to create a new card (if needed in the future)
export const createCard = async (cardData) => {
    try {
        const response = await axios.post(API_URL, cardData);
        return response.data;
    } catch (error) {
        console.error('Error creating card:', error);
        throw error;
    }
};