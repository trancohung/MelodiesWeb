import { useState } from "react";
import { useSongs } from "../context/SongProvider";
import FeaturedSongs from "../components/FeaturedSong";

const Discover = () => {
  const { songs } = useSongs();

  return <FeaturedSongs songs={songs} />;
};
export default Discover;
