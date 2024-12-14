import React ,{useState , useEffect} from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
import Search from '../../Components/Search/Search';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const userId = location.state?.userId || localStorage.getItem('userId') || 'Guest';

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
    <header>
        <div className="leftContainer">
            <img className='logoImg' src={logo} alt='logoImg' />
            <h2>tune</h2>
        </div>
        <div className="centerContainer">
            <Search />
        </div>
        <div className="rightContainer">
          <p>{userId}</p>
          <UserIcon className="homeIcon" />
          <BellIcon className="homeIcon" />
        </div>
    </header>
  )
}

export default Header
