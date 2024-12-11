import React ,{useState , useEffect} from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
import Search from '../../Components/Search/Search';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        </div>
        <div className="centerContainer">
            <Search />
        </div>
        <div className="rightContainer">
          <BellIcon className="homeIcon" />
          <UserIcon className="homeIcon" />
        </div>
    </header>
  )
}

export default Header
