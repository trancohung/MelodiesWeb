const Home = () => {
    const songs = [
      { id: 1, title: 'Song One', artist: 'Artist A' },
      { id: 2, title: 'Song Two', artist: 'Artist B' },
      { id: 3, title: 'Song Three', artist: 'Artist C' },
      { id: 4, title: 'Song Four', artist: 'Artist D' },
    ];
  
    return (
      <div className="p-4 bg-[#412C3A] text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Songs</h2>
        <ul className="space-y-3">
          {songs.map((song) => (
            <li key={song.id} className="p-3 bg-gray-800 rounded-lg flex justify-between items-center hover:bg-gray-700 cursor-pointer">
              <div>
                <p className="text-lg">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <button className="text-[#EE10B0] px-4 py-2 rounded-lg hover:bg-[#EE10B0] hover:text-white">
                Play
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Home;
  