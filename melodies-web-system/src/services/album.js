export const getAlbums = async () => {
  try {
    const res = await api.get("/albums");
    return res.data;
  } catch (error) {
    console.error("Error fetching all albums: ", error);
    return [];
  }
};
