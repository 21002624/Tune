import React from 'react'
import Songdetails from '../Songdetails/Songdetails'
import Filters from '../Filters/Filters'
import './Mainpanel.css';
import Playlist from '../../Components/Playlist/Playlist';

const Mainpanel = () => {
  return (
    <div className='Mainpanel'>
      <Playlist />
    </div>
  )
}

export default Mainpanel
