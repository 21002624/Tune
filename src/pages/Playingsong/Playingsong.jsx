import React, { useState, useRef, useEffect } from 'react';
import { songs } from '../../Data/songs';
import './Playingsong.css';
import { ChevronUpIcon, ChevronDownIcon, PlayIcon, PauseIcon, ChevronRightIcon, ChevronLeftIcon, SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';

const Playingsong = ({ currentSong, setCurrentSong }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isLooping, setIsLooping] = useState(false);
    const [progress, setProgress] = useState(0);

    const audioRef = useRef(null);

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
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
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
        if (audioRef.current) {
            audioRef.current.loop = !isLooping;
            setIsLooping(!isLooping);
        }
    };

    const updateProgress = () => {
        if (audioRef.current) {
            const currentTime = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            const progressPercent = (currentTime / duration) * 100 || 0;
            setProgress(currentTime);

            const progressSlider = document.querySelector('.progress-slider');
            if (progressSlider) {
                progressSlider.style.setProperty('--slider-progress', `${progressPercent}%`);
            }
        }
    };

    const handleSeek = (e) => {
        if (audioRef.current) {
            const seekTime = (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = seekTime;
            setProgress(seekTime);
        }
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
                            {isLooping ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                            )}
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
