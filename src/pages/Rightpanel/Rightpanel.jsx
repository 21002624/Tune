import React, { useState, useEffect } from 'react';
import { EllipsisVerticalIcon ,XMarkIcon } from '@heroicons/react/24/outline';
import './Rightpanel.css';
import { songs } from '../../Data/songs';

const Rightpanel = ({ currentSong }) => {
  const [isMobile, setIsMobile] = useState(false);

  const currentIndex = songs.findIndex(songs => songs.songName === currentSong.songName);
  const nextSong = songs[currentIndex+1] || null;

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
              <div>
                <p>playlist title</p>
              </div>
              <div>
                <EllipsisVerticalIcon className="rightIcon"  />
                <XMarkIcon className="rightIcon"/>
              </div>
            </div>
            <div className="rightpanelDetails">
                <div className='coverImgDiv'>
                  <img className="coverImage" src={currentSong.coverImage} alt="img" />
                </div>
                <div className='rightSongDetailsDiv'>
                    <div>
                      <h1>{currentSong.songName}</h1>
                      <p>{currentSong.artist} {currentSong.album}</p>
                    </div>
                </div>
                <div className="rightSongMiniDiv">
                  <div className='rightSongMiniTitleDiv'>
                    <div>
                      <p>Credit</p>
                    </div>
                    <div>
                      <p>Show all</p>
                    </div>
                  </div>
                  <div className='rightSongCreditsDiv'>
                    <div>
                      <p>{currentSong.album}</p>
                    </div>
                    <div>
                      <p>{currentSong.artist}</p>
                    </div>
                    <div>
                      <p>{currentSong.releaseDate}</p>
                    </div>
                  </div>
                </div>

                <div className='rightSongQueue'>
                    <div>
                      <p>Next in Queue</p>
                      <p>{nextSong.songName}</p>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Rightpanel;
