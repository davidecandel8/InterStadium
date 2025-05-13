import React from 'react';
import PolaroidCard from './PolaroidCard';
import './PolaroidGrid.css';

const PolaroidGrid = ({ matches, onOpenModal }) => {
  return (
    <div className="polaroid-grid">
      {matches.map((match) => (
        <PolaroidCard 
          key={match.id} 
          match={match} 
          onClick={() => onOpenModal(match)} 
        />
      ))}
    </div>
  );
};

export default PolaroidGrid;