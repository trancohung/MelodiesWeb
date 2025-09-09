import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect, useRef, useState } from "react";
import { musicList } from "../utils/musicData";
import { useMusic } from "../context/MusicProvider";

const Header = () => {
  const { user, logout } = useAuth();
  const { playSong } = useMusic();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSong, setFilteredSong] = useState([]);
  const searchRef = useRef(null);

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      setFilteredSong(
        musicList.filter((song) => {
          return (
            song.title.toLowerCase().startsWith(value.toLowerCase()) ||
            song.artist.toLowerCase().startsWith(value.toLowerCase())
          );
        })
      );
    } else {
      setFilteredSong([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
        setFilteredSong([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#412C3A] text-white p-10 flex justify-between items-center h-full">
      <div ref={searchRef} className="relative w-1/3">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearchChange}
          size="large"
          prefix={<SearchOutlined />}
          style={{
            backgroundColor: "lightgray",
            outline: "none",
            boxShadow: "none",
            borderRadius: "10px",
            border: "1px solid transparent",
          }}
        />
        {searchTerm && (
          <div className="absolute w-full bg-[#1F1F1F] border border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
            {filteredSong.length > 0 ? (
              filteredSong.map((song) => (
                <div
                  key={song.id}
                  onClick={() => playSong(song)}
                  className="p-2 cursor-pointer hover:bg-gray-900 transition flex items-center"
                >
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-10 h-10 rounded-md mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{song.title}</h3>
                    <p className="text-xs text-gray-400">{song.artist}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-2 text-gray-400 text-sm">No songs found</p>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-between w-1/3 items-center">
        <div>
          <a href="#" className="text-[#FFFFFF] text-xl cursor-pointer">
            About
          </a>
        </div>
        <div>
          <a href="#" className="text-[#FFFFFF] text-xl cursor-pointer">
            Contact
          </a>
        </div>
        <div>
          <a href="#" className="text-[#FFFFFF] text-xl cursor-pointer">
            Premium
          </a>
        </div>
      </div>
      {user ? (
        <div className="flex gap-4 items-center">
          <span className="bg-[#F6339A] text-[#FFFFFF] p-4 rounded-full uppercase">
            {user.username}
          </span>
          <button
            onClick={logout}
            className="bg-[#1E1E1E] text-[#EE10B0] p-4 rounded-2xl cursor-pointer"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <div className="flex gap-4">
            <Link
              to={"/login"}
              className="bg-[#1E1E1E] text-[#EE10B0] p-4 rounded-2xl cursor-pointer"
            >
              <button className="cursor-pointer">Log In</button>
            </Link>
            <Link
              to={"/register"}
              className="bg-[#1E1E1E] text-[#EE10B0] p-4 rounded-2xl cursor-pointer"
            >
              <button className="cursor-pointer">Register</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
