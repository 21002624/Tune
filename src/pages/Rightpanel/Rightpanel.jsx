import React from 'react';
import './Rightpanel.css';

const Rightpanel = ({ currentSong }) => {
    return (
        <div className="Rightpanel">
            <h2>Now Playing</h2>
            <div className='rightpanelDetails'>
              <img className='coverImage' src={currentSong.coverImage} alt='img' />
              <div>
                <p> {currentSong.songName}</p>
                <p>{currentSong.artist}</p>
                <p>{currentSong.album}</p>
              </div>
            </div>
        </div>
    );
};

export default Rightpanel;
