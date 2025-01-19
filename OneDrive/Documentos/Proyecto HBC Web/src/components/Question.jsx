import React, { useEffect, useRef, useState } from 'react';
import '../styles/Question.css';

const Question = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight + 30}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="faq-question">
      <div className="question-header" onClick={toggleOpen}>
        <h4>{question}</h4>
        <span>{isOpen ? '-' : '+'}</span> 
      </div>
      <div
        className={`question-content ${isOpen ? 'open' : ''}`} 
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Question;
