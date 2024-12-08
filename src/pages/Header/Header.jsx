import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png';
import Search from '../../Components/Search/Search';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';

const Header = () => {
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
