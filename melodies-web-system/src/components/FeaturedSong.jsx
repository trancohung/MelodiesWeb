import React from "react";
import { musicList } from "../utils/musicData";
import SongCard from "../components/SongCard";

const FeaturedSongs = ({ songs }) => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-bold mb-6">
        Featured <span className="text-[#EE10B0]">Songs</span>
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {songs && songs.length > 0 ? (
          songs.map((song) => <SongCard key={song._id} song={song} />)
        ) : (
          <p>No songs available</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedSongs;
