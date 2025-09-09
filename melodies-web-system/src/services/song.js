import api from "./api.js";

export const getSongs = async () => {
  try {
    const res = await api.get("/songs");
    return res.data;
  } catch (error) {
    console.error("Error fetching songs: ", error);
    return [];
  }
};

export const getSongById = async (id) => {
  try {
    const res = await api.get(`/songs/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching song by id: ", error);
    return [];
  }
};

export const uploadSong = async (data) => {
  const res = await api.post("/songs", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
