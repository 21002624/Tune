import React from 'react'
import Songdetails from '../Songdetails/Songdetails'
import Filters from '../Filters/Filters'
import './Mainpanel.css';

const Mainpanel = () => {
  return (
    <div className='Mainpanel'>
      <Filters />
      <Songdetails />
    </div>
  )
}

export default Mainpanel
