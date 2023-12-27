import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './QuoteComp.css';

const QuoteComp = ({ text, author }) => {
  return (
    <div className="quote-container">
      <div className="quote">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
      </div>
      <blockquote className="blockquote">
        <p>{text}</p>
        <footer>{author}</footer>
      </blockquote>
    </div>
  );

};

export default QuoteComp;
