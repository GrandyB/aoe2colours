'use client'
import { useState } from 'react';

const colors = [
  '#344DD6', // Blue
  '#880002', // Red
  '#08AA07', // Green
  '#B0B200', // Yellow
  '#00B1B0', // Teal
  '#B33C7D', // Pink
  '#545454', // Grey
  '#B06702', // Orange
];

export default function ColorButtons() {
  const [overlayColor, setOverlayColor] = useState('');

  const handleButtonClick = (color: string) => {
    setOverlayColor(color);
  };

  const handleCloseOverlay = () => {
    setOverlayColor('');
  };

  return (
    <div id="container">
      <div className="buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleButtonClick(color)}
          >{index+1}</button>
        ))}
      </div>
      {overlayColor && (
        <div className="overlay" style={{ backgroundColor: overlayColor }} onClick={handleCloseOverlay} />
      )}
      
      <style jsx>{`
        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          width: 100%;
        }

        button {
          width: calc(25% - 10px);
          height: calc(50% - 10px);
          border: none;
          cursor: pointer;
          font-size: 20em;
          font-weight: bold;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}
