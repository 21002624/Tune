import React, { useState, useEffect } from 'react';
import './Rightpanel.css';

const Rightpanel = ({ currentSong }) => {
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
        <div className="Rightpanel">
            <div className='Rightpaneltitle'>
              <h2>Now Playing</h2>
            </div>
            <div className="rightpanelDetails">
                <img className="coverImage" src={currentSong.coverImage} alt="img" />
                <div>
                    <p>{currentSong.songName}</p>
                    <p>{currentSong.artist}</p>
                    <p>{currentSong.album}</p>
                </div>
            </div>
        </div>
    );
};

export default Rightpanel;
