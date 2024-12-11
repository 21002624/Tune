import React, { useState, useRef, useEffect } from 'react';
import { songs } from '../../Data/songs';
import './Playingsong.css';
import { ChevronUpIcon, ChevronDownIcon,PlayIcon, PauseIcon,ChevronRightIcon, ChevronLeftIcon ,SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';

const Playingsong = () => {
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1); // Default volume is 100%
    const [isLooping, setIsLooping] = useState(false);
    const [progress, setProgress] = useState(0); // Progress in seconds

    const audioRef = useRef(null); // Reference to the audio element

    const togglePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const playNextSong = () => {
        const currentIndex = songs.findIndex(song => song.songId === currentSong.songId);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentSong(songs[nextIndex]);
    };

    const playPreviousSong = () => {
        const currentIndex = songs.findIndex(song => song.songId === currentSong.songId);
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentSong(songs[prevIndex]);
    };

    const toggleLoop = () => {
        audioRef.current.loop = !isLooping;
        setIsLooping(!isLooping);
    };

    const updateProgress = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        const progressPercent = (currentTime / duration) * 100 || 0;
        setProgress(currentTime);

        const progressSlider = document.querySelector('.progress-slider');
        if (progressSlider) {
            progressSlider.style.setProperty('--slider-progress', `${progressPercent}%`);
        }
    };

    const handleSeek = (e) => {
        const seekTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = seekTime;
        setProgress(seekTime);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentSong]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', updateProgress);
            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
            };
        }
    }, []);

    return (
        <div className="custom-audio-player">
            <div className="partOne">
                <p>{currentSong.songName}</p>
                {/* <p>{currentSong.artist}</p> */}
            </div>
            <div className="partTwo">
                <audio ref={audioRef} preload="metadata">
                    <source src={currentSong.filePath} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <div className="controls">
                    <div>
                        <button onClick={playPreviousSong} className="control-btn">
                           <ChevronLeftIcon />
                        </button>
                        <button onClick={togglePlayPause} className="control-btn">
                            {isPlaying ? <PauseIcon /> : <PlayIcon />} 
                        </button>
                        <button onClick={playNextSong} className="control-btn">
                            <ChevronRightIcon />
                        </button>
                        <button onClick={toggleLoop} className="control-btn">
                            {isLooping ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                                }
                        </button>
                    </div>
                </div>
                <div className="progress-bar">
                    <span>{formatTime(progress)}</span>
                    <div className="progressDiv">
                        <input
                            type="range"
                            className="progress-slider"
                            min="0"
                            max="100"
                            step="0.1"
                            value={audioRef.current?.duration ? (progress / audioRef.current.duration) * 100 : 0}
                            onChange={handleSeek}
                        />
                    </div>
                    <span>{formatTime(audioRef.current?.duration || 0)}</span>
                </div>
            </div>
            <div className="partThree">
                <div>
                    <div className="muteDiv">
                        <button onClick={toggleMute} className="control-btn">
                            {isMuted ? <SpeakerXMarkIcon /> : <SpeakerWaveIcon />}
                        </button>
                        <button onClick={toggleMute} className="control-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="volumeDiv">
                        <input
                            type="range"
                            className="volume-slider"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                    <div className="expandDiv"> 
                        <button className="control-btn" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default Playingsong;
