// Card.js
import React from 'react';
import './card.css'; // Import the CSS file for styling

function Card({ title, body }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Card;
