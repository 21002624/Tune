import React ,{useState} from 'react'
import Header from '../Header/Header'
import Playingsong from '../Playingsong/Playingsong'
import Sidebar from '../Sidebar/Sidebar'
import Mainpanel from '../Mainpanel/Mainpanel'
import './Home.css';
import Rightpanel from '../Rightpanel/Rightpanel'
import { songs } from '../../Data/songs';
import Mobilenav from '../../Components/Mobilenav/Mobilenav'

const Home = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div>
      <Header />
      <div className='panels'>
        <Sidebar />
        <Mainpanel />
        <Rightpanel currentSong={currentSong} />
      </div>
      <Playingsong currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Mobilenav />
    </div>
  )
}


export default Home
