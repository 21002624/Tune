import React from 'react'
import './User.css';
import userVedio from '../../assets/v.webm'
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

const User = () => {
  return (
    <div className='User'>
      <div className="userTopRow">
        <div className='UserImgDiv'>
          <video loop autoPlay muted className='vedioDiv' >
            <source src={userVedio} type="video/mp4" />
          </video>
        </div>
        <div className="userDetailsDiv">
          <div>
            <p>Akzhxx</p>
          </div>
          <div className='userFollowerFollowing'>
            <div>
              <p>Following : 6</p>
            </div>
            <div>
              <p>Followers :5 </p>
            </div>
          </div>
        </div>
        <div className="userSettingDiv">
          <Cog8ToothIcon className='rightIcon' />
        </div>
      </div>

      <div className="userMusicDetailsDiv">
        <div className="totalHours">
          <h4>Total Hours Listened</h4>
          <p>120 hrs</p>
        </div>
        <div className="likedSongs">
          <h4>Liked Songs</h4>
          <p>54 songs</p>
        </div>
        <div className="followingArtists">
          <h4>Following Artists</h4>
          <p>18 artists</p>
        </div>
        <div className="playlists">
          <h4>Playlists</h4>
          <p>8 playlists</p>
        </div>
      </div>

    </div>
  )
}

export default User
