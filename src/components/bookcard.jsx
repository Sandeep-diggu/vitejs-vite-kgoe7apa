import React from 'react';
import './bookcard.css'; 

const BookCard = ({ title, author, description }) => {
    return (
        <div className="book-card">
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{description}</p>
        </div>
    );
};

export default BookCard;