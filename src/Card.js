import React from 'react';
import './Card.css'; // เพิ่มไฟล์ CSS

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-face card-front">
          <img src="img/1.png" alt="Front" />
        </div>
        <div className="card-face card-back">
          <img src="img/2.png" alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default Card;
