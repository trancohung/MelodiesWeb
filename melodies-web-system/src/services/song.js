import api from "./api.js";

export const getSongs = async () => {
  const res = await api.get("/songs");
  return res.data;
};

export const getSongById = async (id) => {
  const res = await api.get(`/songs/${id}`);
  return res.data;
};

export const uploadSong = async (data) => {
  const res = await api.post("/songs", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
