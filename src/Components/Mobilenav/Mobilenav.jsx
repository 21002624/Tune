import React, { useState, useEffect } from 'react';
import './Mobilenav.css';

const Mobilenav = ({ onOptionSelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 800px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className='Mobilenav'>
      <div onClick={() => onOptionSelect('home')}>Home</div>
      <div onClick={() => onOptionSelect('search')}>Search</div>
      <div onClick={() => onOptionSelect('currentSong')}>Song</div>
    </div>
  );
};

export default Mobilenav;
