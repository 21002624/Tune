import React from 'react'
import './Sidebar.css';
import { ArrowPathIcon, HeartIcon, Square3Stack3DIcon, MicrophoneIcon, UserIcon } from '@heroicons/react/24/outline';
import { SparklesIcon, ChartBarIcon, UserGroupIcon, SignalIcon } from '@heroicons/react/24/outline';



const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div>
        <div className="recentBar">
            <h2>Browse</h2>
            <div>
                <p>
                    <SparklesIcon className="sideBarIcon" /> New Releases
                </p>
                <p>
                    <ChartBarIcon className="sideBarIcon" /> Top Charts
                </p>
                <p>
                    <UserGroupIcon className="sideBarIcon" /> Top Artists
                </p>
                <p>
                    <SignalIcon className="sideBarIcon" /> Radio
                </p>
            </div>

        </div>

        <div className="libraryBar">
        <h2>Library</h2>
        <div>
            <p>
                <ArrowPathIcon className="sideBarIcon" /> History
            </p>
            <p>
                <HeartIcon className="sideBarIcon" /> Liked Songs
            </p>
            <p>
                <Square3Stack3DIcon className="sideBarIcon" /> Albums
            </p>
            <p>
                <MicrophoneIcon className="sideBarIcon" /> Podcasts
            </p>
            <p>
                <UserIcon className="sideBarIcon" /> Artists
            </p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
