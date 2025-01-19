import React from 'react';
import '../styles/Activities.css';

const Activities = ({ activities }) => {
  return (
    <div className="activities-section">
      <h2>Actividades:</h2>
      <ul className="activities-list">
        {activities.map((item, index) => (
          <li key={index} className="activities-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
