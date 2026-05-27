import React, { useState } from 'react';
import './Card.css'; // Add your styles here

const frontImage = `${process.env.PUBLIC_URL}/img/1.png`;
const backImage = `${process.env.PUBLIC_URL}/img/2.png`;

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
      <button
        className={`card${isFlipped ? ' flipped' : ''}`}
        type="button"
        aria-label="Flip wedding invitation card"
        onClick={() => setIsFlipped((current) => !current)}
      >
        <div className="card-face card-front">
          <img src={frontImage} alt="Front" />
        </div>
        <div className="card-face card-back">
          <img src={backImage} alt="Back" />
        </div>
      </button>
  );
};

export default Card;
