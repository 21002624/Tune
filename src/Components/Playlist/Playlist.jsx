import React, { useState } from 'react';
import './Playlist.css';
import cover from '../../assets/music_Cover.webp'

const Playlist = () => {
  const [activeTab, setActiveTab] = useState('own'); // State to track the active tab

  // Sample playlists for each category
  const playlists = {
    own: [
      { id: 1, title: 'Workout Vibes', cover: cover },
      { id: 2, title: 'Chill Evenings', cover: cover },
      { id: 3, title: 'Party Hits', cover: cover },
    ],
    following: [
      { id: 4, title: 'Top 100', cover: cover },
      { id: 5, title: 'Relaxing Beats', cover: cover },
      { id: 6, title: 'Indie Classics', cover: cover },
    ],
    collaboration: [
      { id: 7, title: 'Weekend Jam', cover: cover },
      { id: 8, title: 'Road Trip Mix', cover: cover },
    ],
  };

  return (
    <div className="playlist-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'own' ? 'active' : ''}`}
          onClick={() => setActiveTab('own')}
        >
          Own Playlist
        </button>
        <button
          className={`tab ${activeTab === 'following' ? 'active' : ''}`}
          onClick={() => setActiveTab('following')}
        >
          Following
        </button>
        <button
          className={`tab ${activeTab === 'collaboration' ? 'active' : ''}`}
          onClick={() => setActiveTab('collaboration')}
        >
          Collaboration
        </button>
      </div>

      {/* Playlist Grid */}
      <div className="playlist-grid">
        {playlists[activeTab].map((playlist) => (
          <div key={playlist.id} className="playlist-item">
            <img
              src={playlist.cover}
              alt={playlist.title}
              className="playlist-cover"
            />
            <p className="playlist-title">{playlist.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
