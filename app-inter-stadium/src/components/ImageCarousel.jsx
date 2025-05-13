import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e) => {
    e.stopPropagation();
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Don't render arrows if there's only one image
  if (images.length <= 1) {
    return (
      <div className="carousel-container">
        <img 
          src={images[0]} 
          alt="Match" 
          className="carousel-image"
        />
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <button 
        className="carousel-button carousel-button-left" 
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <img 
        src={images[currentIndex]} 
        alt={`Match ${currentIndex + 1}`} 
        className="carousel-image"
      />
      <button 
        className="carousel-button carousel-button-right" 
        onClick={goToNext}
      >
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.length > 1 && (
          <span>{currentIndex + 1} / {images.length}</span>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;