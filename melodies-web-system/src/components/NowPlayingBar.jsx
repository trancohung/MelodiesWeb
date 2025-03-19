import React from "react";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import { useMusic } from "../context/MusicProvider";

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const NowPlayingBar = () => {
  const { currentSong, isPlaying, playSong, currentTime, duration, seek } =
    useMusic();

  const handleSeek = (e) => {
    seek(e.target.value);
  };

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0E1920] text-white p-4 flex items-center justify-between">
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

      <div className="w-2/3 flex items-center gap-2 mt-2">
        <span className="text-xs text-gray-400">
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
          }}
        />
        <span className="text-xs text-gray-400">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center gap-4 text-3xl">
        <StepBackwardOutlined className="cursor-pointer hover:text-gray-400" />
        <button onClick={() => playSong(currentSong)}>
          {isPlaying ? (
            <PauseCircleOutlined className="cursor-pointer hover:text-gray-400" />
          ) : (
            <PlayCircleOutlined className="cursor-pointer hover:text-gray-400" />
          )}
        </button>
        <StepForwardOutlined className="cursor-pointer hover:text-gray-400" />
      </div>
    </div>
  );
};

export default NowPlayingBar;
