import React from 'react';
import './feature.css';

const Feature = ({ number, title, text }) => (
  <div className="mkz__features-container__feature">    
    <div className="mkz__features-container__feature-title">
      <h1><span className='mkz__numeral'>{number}</span>{title}</h1>
    </div>
    <div className="mkz__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
