import React from 'react';
import './Playlist.css';

const Playlist = ({ activeCategory = {}, activeTab, setActiveTab }) => {
  const tabs = Object.keys(activeCategory || {});
  const validTab = tabs.length > 0 && tabs.includes(activeTab) ? activeTab : tabs[0] || null;

  const playlistItems = Array.isArray(activeCategory?.[validTab])
    ? activeCategory[validTab]
    : [];

  return (
    <div className="playlist-container">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${validTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Playlist Grid */}
      <div className="playlist-grid">
        {playlistItems.length > 0 ? (
          playlistItems.map((playlist) => (
            <div key={playlist.id} className="playlist-item">
              <img src={playlist.coverImage} alt={playlist.title} className="playlist-cover" />
              <p className="playlist-title">{playlist.title}</p>
            </div>
          ))
        ) : (
          <p>No playlists available</p>
        )}
      </div>
    </div>
  );
};

export default Playlist;
