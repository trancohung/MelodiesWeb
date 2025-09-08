import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getSongs, uploadSong } from "../services/song";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSongs = async () => {
    setIsLoading(true);
    try {
      const data = await getSongs();
      if (data.success) {
        setSongs(data.songs);
        return { success: true, data: data.songs };
      }
    } catch (error) {
      console.error("Error fetching songs: ", error);
      return { success: false, message: "Error fetching songs" };
    } finally {
      setIsLoading(false);
    }
  };

  const addSong = async (songData) => {
    try {
      const newSong = await uploadSong(songData);
      if (newSong.success) {
        setSongs((prevSongs) => [...prevSongs, newSong.song]);
        return { success: true, data: newSong.song };
      }
    } catch (error) {
      console.error("Error uploading song: ", error);
      return { success: false, message: "Error uploading song" };
    }
  };

  return (
    <SongContext.Provider value={{ songs, isLoading, fetchSongs, addSong }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongs = () => useContext(SongContext);
