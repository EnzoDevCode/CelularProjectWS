import React from 'react';
import '../styles/Question.css';

const FAQs = ({ children }) => {
  return (
    <div className="faq-container">
      {children}
    </div>
  );
};

export default FAQs;
