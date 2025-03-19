import React, { createContext, useState, useRef, useContext, useEffect } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;

    if (currentSong) {
      audio.src = currentSong.src;
      audio.load();
      audio.play();
      setIsPlaying(true);
    }

    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetaData);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, [currentSong])

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume])

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
    }
  };

  const seek = (time) => {
    audioRef.current.currentTime= time;
    setCurrentTime(time);
  }

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, playSong, currentTime, duration, seek, volume, setVolume }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
