import React, { useState } from 'react';
import PolaroidGrid from './components/PolaroidGrid';
import PolaroidModal from './components/PolaroidModal';
import matchData from './matches';
import './App.css';

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Le Mie Partite</h1>
      </header>
      <main>
        <PolaroidGrid matches={matchData} onOpenModal={openModal} />
        {isModalOpen && selectedMatch && (
          <PolaroidModal match={selectedMatch} onClose={closeModal} />
        )}
      </main>
    </div>
  );
}

export default App;