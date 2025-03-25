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
  const [previousVolume, setPreviousVolume] = useState(0.5);
  const [speed, setSpeed] = useState(1);

  const audioRef = useRef(new Audio());
  const isRepeatingRef = useRef(false);

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
      if (isRepeatingRef.current) {
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
  }, [currentSong]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audioRef.current.playbackRate = speed;
  }, [speed]);

  const toggleRepeat = () => {
    isRepeatingRef.current = !isRepeatingRef.current;
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
    } else {
      setVolume(previousVolume);
    }
  };

  const togglePlay = () => {
    if (!currentSong) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      togglePlay();
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
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
    setSpeed(1);
  };

  const playPreviousSong = () => {
    if (!currentSong) return;

    const currentIndex = musicList.findIndex(
      (song) => song.id === currentSong.id
    );
    const previousIndex =
      (currentIndex - 1 + musicList.length) % musicList.length;
    setCurrentSong(musicList[previousIndex]);
    setSpeed(1);
  };

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        isPlaying,
        togglePlay,
        playSong,
        currentTime,
        duration,
        seek,
        volume,
        setVolume,
        toggleMute,
        playNextSong,
        playPreviousSong,
        isRepeating: isRepeatingRef.current,
        toggleRepeat,
        speed,
        changeSpeed,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
