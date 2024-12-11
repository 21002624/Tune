import React from 'react'
import './Mobilenav.css';
import { HomeIcon ,MagnifyingGlassIcon,FolderIcon,XMarkIcon} from '@heroicons/react/24/outline';

const Mobilenav = () => {
  return (
    <div className='Mobilenav'>
      <div>
        Home
      </div>
      <div>
        Search
      </div>
      <div>
        PlayList
      </div>
    </div>
  )
}

export default Mobilenav
