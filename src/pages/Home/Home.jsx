import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Playingsong from '../Playingsong/Playingsong';
import Sidebar from '../Sidebar/Sidebar';
import Mainpanel from '../Mainpanel/Mainpanel';
import Rightpanel from '../Rightpanel/Rightpanel';
import Mobilenav from '../../Components/Mobilenav/Mobilenav';
import './Home.css';
import { songs } from '../../Data/songs';
import Search from '../../Components/Search/Search';

const Home = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Check if the view is mobile
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

  // Handle mobile navigation selection
  const handleOptionSelect = (page) => {
    setCurrentPage(page);
  };

  const renderMobilePage = () => {
    switch (currentPage) {
      case 'home':
        return <Sidebar />;
      case 'search':
        return <Search />;
      case 'currentSong':
        return <Rightpanel currentSong={currentSong} />;
      default:
        return <Sidebar />;
    }
  };

  return (
    <div>
      <Header />
      {isMobile ? (
        <>
          {/* Mobile View */}
          <div className="MobileView">{renderMobilePage()}</div>
          <Playingsong currentSong={currentSong} setCurrentSong={setCurrentSong} />
          <Mobilenav onOptionSelect={handleOptionSelect} />
        </>
      ) : (
        <>
          {/* Desktop View */}
          <div className="panels">
            <Sidebar />
            <Mainpanel />
            <Rightpanel currentSong={currentSong} />
          </div>
          <Playingsong currentSong={currentSong} setCurrentSong={setCurrentSong} />
        </>
      )}
    </div>
  );
};

export default Home;
