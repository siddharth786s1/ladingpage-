import React from 'react';

const CardItem = ({ card }) => {
    return (
        <div className="card-item">
            <img src={card.photo} alt={card.name} className="card-image" />
            <div className="card-details">
                <h3 className="card-name">{card.name}</h3>
                <p className="card-place">{card.place}</p>
                <p className="card-genre">{card.genre}</p>
            </div>
        </div>
    );
};

export default CardItem;