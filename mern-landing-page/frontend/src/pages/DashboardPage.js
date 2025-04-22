import React, { useEffect, useState } from 'react';
import { fetchCards } from '../services/cardService';
import CardItem from '../components/Card/CardItem';

const DashboardPage = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCards = async () => {
            try {
                const data = await fetchCards();
                setCards(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getCards();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="card-list">
                {cards.map(card => (
                    <CardItem key={card._id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;