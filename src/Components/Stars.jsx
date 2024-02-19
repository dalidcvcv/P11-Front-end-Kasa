import React from 'react';
import Star from '../assets/star.png';
import Star2 from '../assets/star2.png';
import './Stars.css';

function Stars({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="stars-container">
      {range &&
        range.map((item, index) =>
          rating >= item ? (
            <img src={Star} className="stars-orange" alt={`star-${item}`} key={item + index} />
          ) : (
            <img src={Star2} className="stars-grey" alt={`star-${item}`} key={item + index} />
          )
        )}
    </div>
  );
}

export default Stars;
