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
                <p className="animatedText">
                    <SparklesIcon className="sideBarIcon" /> New Releases
                </p>
                <p className="animatedText">
                    <ChartBarIcon className="sideBarIcon" /> Top Charts
                </p>
                <p className="animatedText">
                    <UserGroupIcon className="sideBarIcon" /> Top Artists
                </p>
                <p className="animatedText">
                    <SignalIcon className="sideBarIcon" /> Radio
                </p>
            </div>

        </div>

        <div className="libraryBar">
        <h2>Library</h2>
        <div>
            <p className="animatedText">
                <ArrowPathIcon className="sideBarIcon" /> History
            </p>
            <p className="animatedText">
                <HeartIcon className="sideBarIcon" /> Liked Songs
            </p>
            <p className="animatedText">
                <Square3Stack3DIcon className="sideBarIcon" /> Albums
            </p>
            <p className="animatedText">
                <MicrophoneIcon className="sideBarIcon" /> Podcasts
            </p>
            <p className="animatedText">
                <UserIcon className="sideBarIcon" /> Artists
            </p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
