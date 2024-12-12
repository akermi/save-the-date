import React, { useEffect } from 'react';
import './Card.css'; // Add your styles here

const Card = () => {
  useEffect(() => {
    const card = document.querySelector('.card');
    const handleClick = () => {
      card.classList.toggle('flipped');
    };
    
    // Add event listener
    card.addEventListener('click', handleClick);
    
    // Cleanup the event listener when the component is unmounted
    return () => {
      card.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts
  
  return (
      <div className="card">
        <div className="card-face card-front">
          <img src="img/1.png" alt="Front" />
        </div>
        <div className="card-face card-back">
          <img src="img/2.png" alt="Back" />
        </div>
      </div>
  );
};

export default Card;
