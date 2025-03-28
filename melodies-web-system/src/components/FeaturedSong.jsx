import React from "react";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { musicList } from "../utils/musicData";
import { useMusic } from "../context/MusicProvider";

const FeaturedSongs = () => {
  const { currentSong, isPlaying, playSong } = useMusic();

  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-bold mb-4">
        Featured <span className="text-[#EE10B0]">Songs</span>
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {musicList.map((song) => (
          <div
            key={song.id}
            onClick={() => playSong(song)}
            className="bg-[#1F1F1F] w-full h-100 p-4 rounded-lg cursor-pointer hover:bg-gray-900 transition"
          >
            <img
              src={song.cover}
              alt={song.title}
              className="w-full h-2/3 rounded-lg object-cover"
            />
            <div className="flex mt-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{song.title}</h3>
                <p className="text-gray-400 text-sm">{song.artist}</p>
              </div>
              <button>
                {currentSong?.id === song.id && isPlaying ? (
                  <PauseCircleOutlined
                    style={{
                      fontSize: "1.5rem",
                      color: "#F6339A",
                    }}
                    className=" hover:!text-pink-400"
                  />
                ) : (
                  <PlayCircleOutlined
                    style={{
                      fontSize: "1.5rem",
                      color: "#F6339A",
                    }}
                    className=" hover:!text-pink-400"
                  />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSongs;
