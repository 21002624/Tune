import React from 'react';
import './Sidebar.css';
import {
  ArrowPathIcon,
  HeartIcon,
  Square3Stack3DIcon,
  MicrophoneIcon,
  UserIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  SignalIcon,
} from '@heroicons/react/24/outline';
import { allCategories } from '../../Data/songs';

const Sidebar = ({ activeCategory, setActiveCategory, activeTab, setActiveTab }) => {
  const handleSidebarOption = (category) => {
    setActiveCategory(allCategories[category] || {});
    const defaultTab = Object.keys(allCategories[category] || {})[0] || null;
    setActiveTab(defaultTab);
  };

  return (
    <div className="sidebar-container">
      <div className="Sidebar">
        <div className="recentBar">
          <h2>Browse</h2>
          <div>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('newRelease')}
            >
              <SparklesIcon className="sideBarIcon" /> New Releases
            </p>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('topChat')}
            >
              <ChartBarIcon className="sideBarIcon" /> Top Charts
            </p>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('topArtists')}
            >
              <UserGroupIcon className="sideBarIcon" /> Top Artists
            </p>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('radio')}
            >
              <SignalIcon className="sideBarIcon" /> Radio
            </p>
          </div>
        </div>

        <div className="libraryBar">
          <h2>Library</h2>
          <div>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('history')}
            >
              <ArrowPathIcon className="sideBarIcon" /> History
            </p>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('liked')}
            >
              <HeartIcon className="sideBarIcon" /> Liked Songs
            </p>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('albums')}
            >
              <Square3Stack3DIcon className="sideBarIcon" /> Albums
            </p>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('podCasts')}
            >
              <MicrophoneIcon className="sideBarIcon" /> Podcasts
            </p>
            <p
              className="animatedText"
              onClick={() => handleSidebarOption('playlists')}
            >
              <UserIcon className="sideBarIcon" /> Artists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
