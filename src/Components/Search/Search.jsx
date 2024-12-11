import React, { useState } from 'react'
import './Search.css'
import { HomeIcon ,MagnifyingGlassIcon,FolderIcon,XMarkIcon} from '@heroicons/react/24/outline';


const Search = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearch =()=>{
        setSearchText("");
    }
  return (
    <div className='searchInputContainer'>
        <div className='searchIconDiv'>
            <HomeIcon className="homeIcon" />
        </div>
        <div className="searchBox">
            {searchText ? 
                (<XMarkIcon className='searchIcon' onClick={handleSearch} />)
                    : 
                    (<MagnifyingGlassIcon className="searchIcon" />) 
            }
            <input 
                className='SearchInput' 
                placeholder='Search' 
                type='text' 
                value={searchText} 
                onChange={(e)=> setSearchText(e.target.value) } 
            />
        </div>
        <div className='searchIconDiv'>
            <FolderIcon className="homeIcon" />
        </div>
    </div>
  )
}

export default Search
