import React from 'react';
import './PolaroidCard.css';

const PolaroidCard = ({ match, onClick }) => {
  const { date, photos, homeTeam, awayTeam, homeResult, awayResult } = match;
  
  // Format date from "dd/mm/yyyy" to a more readable format
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="polaroid-card" onClick={onClick}>
      <div className="polaroid-image-container">
        <img src={photos[0]} alt={`${homeTeam} vs ${awayTeam}`} className="polaroid-image" />
      </div>
      <div className="polaroid-info">
        <div className="polaroid-date">{formatDate(date)}</div>
        <div className="polaroid-result">
          {homeTeam} {homeResult}-{awayResult} {awayTeam}
        </div>
      </div>
    </div>
  );
};

export default PolaroidCard;