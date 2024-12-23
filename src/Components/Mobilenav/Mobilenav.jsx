import React, { useState, useEffect } from 'react';
import './Mobilenav.css';
import { HomeIcon ,MagnifyingGlassIcon,UserCircleIcon, MusicalNoteIcon} from '@heroicons/react/24/outline';

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
      <div onClick={() => onOptionSelect('home')}><HomeIcon className="rightIcon"/></div>
      <div onClick={() => onOptionSelect('search')}><MagnifyingGlassIcon className="rightIcon"/></div>
      <div onClick={() => onOptionSelect('playlist')}><MusicalNoteIcon className="rightIcon"/></div>
      <div onClick={() => onOptionSelect('user')}><UserCircleIcon className="rightIcon"/></div>
      
    </div>
  );
};

export default Mobilenav;
