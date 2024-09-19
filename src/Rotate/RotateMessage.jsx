// RotateMessage.js
import React, { useState, useEffect } from 'react';

const RotateMessage = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isPortrait && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <p className="text-white text-xl font-bold text-center">
          Please rotate your screen to landscape mode for a better experience.
        </p>
      </div>
    )
  );
};

export default RotateMessage;
