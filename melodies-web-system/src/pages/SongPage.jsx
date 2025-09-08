import React, { useState, useEffect } from "react";
import { useSongs } from "../context/SongProvider";
import SongCard from "../components/SongCard";

const SongPage = () => {
  const { songs, isLoading, fetchSongs, addSong } = useSongs();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return alert("Please provide both title and file");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("song", file);

    setUploading(true);
    const res = await addSong(formData);
    setUploading(false);

    if (res.success) {
      setFile(null);
      setTitle("");
      alert("Song uploaded successfully");
    } else {
      alert(res.message || "Error uploading song");
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-bold mb-6 text-[#EE10B0]">Songs</h2>

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="flex items-center gap-4 mb-10 flex-wrap"
      >
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-600 p-2 rounded-lg bg-transparent text-white flex-1 min-w-[200px]"
        />
        <span className="ml-2 text-gray-300">
          {file ? file.name : "No file selected"}
        </span>
        <label className="bg-[#EE10B0] text-white px-4 py-2 rounded cursor-pointer hover:bg-pink-600">
          Choose File
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </label>
        <button
          type="submit"
          disabled={uploading}
          className="bg-[#EE10B0] hover:bg-[#C00E90] px-4 py-2 rounded-lg"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Song List */}
      {isLoading ? (
        <p>Loading songs...</p>
      ) : songs.length === 0 ? (
        <p className="text-gray-400">No songs uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {songs.map((song) => (
            <SongCard key={song._id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongPage;
