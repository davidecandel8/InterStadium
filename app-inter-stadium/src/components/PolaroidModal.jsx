import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import './PolaroidModal.css';

const PolaroidModal = ({ match, onClose }) => {
  const [view, setView] = useState('details');
  
  const {
    date,
    time,
    photos,
    competition,
    round,
    homeTeam,
    awayTeam,
    homeResult,
    awayResult,
    scorers,
    minGoal,
    penalty,
    stadiumMates,
    comment,
    highlights,
    matchReport
  } = match;

  // Format date from "dd/mm/yyyy" to a more readable format
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${day}/${month}/${year}`;
  };

  // Create scorers list with penalty indicator and minute
  const formatScorersList = () => {
    return scorers.map((scorer, index) => {
      const isPenalty = penalty[index] === 1;
      const minute = minGoal[index];
      return (
        <li key={index}>
          {scorer} ({minute}'{isPenalty ? ' rig.' : ''})
        </li>
      );
    });
  };

  // Create stadium mates list
  const formatStadiumMatesList = () => {
    return stadiumMates.map((mate, index) => (
      <li key={index}>{mate}</li>
    ));
  };

  // Handle external links
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle back button when in comment or stadium mates view
  const handleBackToDetails = () => {
    setView('details');
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="polaroid-modal">
          <div className="polaroid-modal-date">{formatDate(date)} - {time}</div>
          
          <div className="polaroid-modal-image">
            <ImageCarousel images={photos} />
          </div>

          {view === 'details' && (
            <div className="polaroid-modal-info">
              <div className="polaroid-modal-result">
                <strong>{homeTeam} {homeResult}-{awayResult} {awayTeam}</strong>
              </div>
              
              <div className="polaroid-modal-competition">
                {competition} {round && <span>({round})</span>}
              </div>
              
              <div className="polaroid-modal-scorers">
                <ul className="scorers-list">
                  {formatScorersList()}
                </ul>
              </div>
              
              <div className="polaroid-modal-buttons">
                <button 
                  className="modal-button"
                  onClick={() => setView('comment')}
                >
                  Commento
                </button>
                <button 
                  className="modal-button"
                  onClick={() => setView('stadiumMates')}
                >
                  Compagni
                </button>
                <button 
                  className="modal-button"
                  onClick={() => openExternalLink(matchReport)}
                >
                  Match Report
                </button>
                <button 
                  className="modal-button"
                  onClick={() => openExternalLink(highlights)}
                >
                  Highlights
                </button>
              </div>
            </div>
          )}

          {view === 'comment' && (
            <div className="polaroid-modal-info">
              <div className="polaroid-modal-comment">
                {comment ? comment : "Nessun commento disponibile."}
              </div>
              <div className="polaroid-modal-buttons">
                <button 
                  className="modal-button back-button"
                  onClick={handleBackToDetails}
                >
                  Indietro
                </button>
              </div>
            </div>
          )}

          {view === 'stadiumMates' && (
            <div className="polaroid-modal-info">
              <div className="polaroid-modal-mates">
                <h3>Compagni allo stadio:</h3>
                <ul className="mates-list">
                  {formatStadiumMatesList()}
                </ul>
              </div>
              <div className="polaroid-modal-buttons">
                <button 
                  className="modal-button back-button"
                  onClick={handleBackToDetails}
                >
                  Indietro
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolaroidModal;