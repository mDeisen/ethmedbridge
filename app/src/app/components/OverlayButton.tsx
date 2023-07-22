import React, { useState } from "react";

const OverlayButton = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Function to toggle the overlay
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div>
      <button
        className="btn btn-accent btn-sm"
        onClick={toggleOverlay}
      >
        QR
      </button>
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          {/* Replace 'imageUrl' with the actual URL of the picture */}
          <img
            src="/assets/QR.png"
            alt="Overlay Picture"
            className="max-w-80vw max-h-80vh"
          />
          <button
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={toggleOverlay}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default OverlayButton;
