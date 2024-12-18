import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Playingsong from '../Playingsong/Playingsong';
import Sidebar from '../Sidebar/Sidebar';
import Playlist from '../../Components/Playlist/Playlist';
import Rightpanel from '../Rightpanel/Rightpanel';
import Mobilenav from '../../Components/Mobilenav/Mobilenav';
import Search from '../../Components/Search/Search';
import User from '../User/User';
import './Home.css';
import { songs } from '../../Data/songs';
import { allCategories } from '../../Data/songs'; // Ensure correct data import
import { useAuth } from '../../Components/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(allCategories['playlists'] || {});
  const [activeTab, setActiveTab] = useState('own');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Check if the screen size is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 800px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleOptionSelect = (page) => {
    setCurrentPage(page);
  };

  const renderMobilePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      case 'search':
        return <Search />;
      case 'currentSong':
        return <Rightpanel currentSong={currentSong} />;
      case 'user':
        return <User />;
      case 'playlist':
        return (
          <Playlist
            activeCategory={activeCategory}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
      default:
        return (
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        );
    }
  };

  return (
    <div>
      <Header />
      {isMobile ? (
        <>
          <div className="MobileView">{renderMobilePage()}</div>
          <Playingsong
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            onOptionSelect={handleOptionSelect}
          />
          <Mobilenav onOptionSelect={setCurrentPage} />
        </>
      ) : (
        <div className="panels">
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Playlist
            activeCategory={activeCategory}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Rightpanel currentSong={currentSong} />
          <Playingsong
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
