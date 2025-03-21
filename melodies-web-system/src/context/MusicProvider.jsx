import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import { musicList } from "../utils/musicData";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isRepeating, setIsRepeating] = useState(false);

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

    const handleSongEnd = () => {
      if (isRepeating) {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNextSong();
      }
    };

    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetaData);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleSongEnd);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [isRepeating, currentSong]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const toggleRepeat = () => {
    setIsRepeating((prev) => !prev)
  }

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
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const playNextSong = () => {
    if (!currentSong) return;

    const currentIndex = musicList.findIndex(
      (song) => song.id === currentSong.id
    );
    const nextIndex = (currentIndex + 1) % musicList.length;
    setCurrentSong(musicList[nextIndex]);
  };

  const playPreviousSong = () => {
    if (!currentSong) return;

    const currentIndex = musicList.findIndex(
      (song) => song.id === currentSong.id
    );
    const previousIndex =
      (currentIndex - 1 + musicList.length) % musicList.length;
    setCurrentSong(musicList[previousIndex]);
  };

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        currentTime,
        duration,
        seek,
        volume,
        setVolume,
        playNextSong,
        playPreviousSong,
        isRepeating,
        toggleRepeat
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
