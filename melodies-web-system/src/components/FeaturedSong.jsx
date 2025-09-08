import React from "react";
import { musicList } from "../utils/musicData";
import SongCard from "../components/SongCard";

const FeaturedSongs = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-bold mb-6">
        Featured <span className="text-[#EE10B0]">Songs</span>
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {musicList.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSongs;
