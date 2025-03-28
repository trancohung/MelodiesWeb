import React, { useEffect, useState } from "react";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  SoundOutlined,
  MutedOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { useMusic } from "../context/MusicProvider";

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const NowPlayingBar = () => {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
    toggleMute,
    playNextSong,
    playPreviousSong,
    isRepeating,
    toggleRepeat,
    speed,
    changeSpeed,
  } = useMusic();

  const [repeatUI, setRepeatUI] = useState(isRepeating);

  const handleSeek = (e) => {
    seek(e.target.value);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleToggleRepeat = () => {
    toggleRepeat();
    setRepeatUI(!repeatUI);
  };

  const handleChangeSpeed = (e) => {
    changeSpeed(e.target.value);
  };

  useEffect(() => {
    return () => {
      togglePlay(false);
    };
  }, []);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-12 h-12 rounded-lg"
        />
        <div>
          <h3 className="text-lg font-bold">{currentSong.title}</h3>
          <p className="text-sm text-gray-400">{currentSong.artist}</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center gap-2 ">
        <span className="text-xs text-[#EE10B0]">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          style={{
            width: "100%",
            accentColor: "#EE10B0",
          }}
        />
        <span className="text-xs text-[#EE10B0]">{formatTime(duration)}</span>
      </div>
      <div className="text-3xl">
        <button
          className={isRepeating ? "text-[#EE10B0]" : "text-white"}
          onClick={handleToggleRepeat}
        >
          <RetweetOutlined />
        </button>
      </div>
      <div className="text-[#EE10B0]">
        <select
          value={speed}
          onChange={handleChangeSpeed}
          className="bg-black appearance-none outline-none p-2"
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
      <div className="flex items-center gap-4 text-3xl">
        <StepBackwardOutlined
          className="cursor-pointer"
          onClick={playPreviousSong}
          style={{
            color: "#EE10B0",
          }}
        />
        <button onClick={togglePlay}>
          {isPlaying ? (
            <PauseCircleOutlined
              className="cursor-pointer"
              style={{
                color: "#EE10B0",
              }}
            />
          ) : (
            <PlayCircleOutlined
              className="cursor-pointer"
              style={{
                color: "#EE10B0",
              }}
            />
          )}
        </button>
        <StepForwardOutlined
          className="cursor-pointer"
          onClick={playNextSong}
          style={{
            color: "#EE10B0",
          }}
        />
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleMute}>
          {volume > 0 ? (
            <SoundOutlined
              className="cursor-pointer"
              style={{
                color: "#EE10B0",
              }}
            />
          ) : (
            <MutedOutlined
              className="cursor-pointer"
              style={{
                color: "#EE10B0",
              }}
            />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          style={{
            accentColor: "#EE10B0",
          }}
        />
      </div>
    </div>
  );
};

export default NowPlayingBar;
