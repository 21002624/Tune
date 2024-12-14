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
import { useAuth } from '../../Components/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import User from '../User/User';

const Home = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const { isAuthenticated } = useAuth(); 
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if the user is not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

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
        return <Sidebar />;
      case 'search':
        return <Search />;
      case 'currentSong':
        return <Rightpanel currentSong={currentSong} />;
      case 'user':
        return <User />;
      default:
        return <Sidebar />;
    }
  };

  return (
    <div>
      <Header />
      {isMobile ? (
        <>
          <div className="MobileView">{renderMobilePage()}</div>
          <Playingsong currentSong={currentSong} setCurrentSong={setCurrentSong} onOptionSelect={handleOptionSelect}  selectedOption={selectedOption} />
          <Mobilenav onOptionSelect={setCurrentPage} />
        </>
      ) : (
        <div className="panels">
          <Sidebar />
          <Mainpanel />
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
