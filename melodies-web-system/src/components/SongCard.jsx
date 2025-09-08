import React from "react";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { useMusic } from "../context/MusicProvider";
import api from "../services/api";

const SongCard = ({ song }) => {
  const { currentSong, isPlaying, playSong } = useMusic();

  const API_BASE = "http://localhost:5000";

  const normalizedSong = {
    id: song._id || song.id,
    title: song.title,
    src: song.fileUrl
      ? `${API_BASE}${song.fileUrl.replace(/\\/g, "/")}`
      : song.src,
    cover: song.coverUrl || "/default-cover.jpg",
    artist:
      typeof song.artist === "object"
        ? song.artist.username
        : song.artist || "Unknown",
  };

  return (
    <div
      onClick={() => playSong(normalizedSong)}
      className="bg-[#1F1F1F] rounded-lg p-4 cursor-pointer hover:bg-gray-900 transition"
    >
      <img
        src={normalizedSong.cover}
        alt={normalizedSong.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex mt-4 items-center">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{normalizedSong.title}</h3>
          <p className="text-gray-400 text-sm">{normalizedSong.artist}</p>
        </div>
        {currentSong?.id === normalizedSong.id && isPlaying ? (
          <PauseCircleOutlined
            style={{ fontSize: "1.8rem", color: "#F6339A" }}
          />
        ) : (
          <PlayCircleOutlined
            style={{ fontSize: "1.8rem", color: "#F6339A" }}
          />
        )}
      </div>
    </div>
  );
};

export default SongCard;
