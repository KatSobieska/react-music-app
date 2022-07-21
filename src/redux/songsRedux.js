export const getAllSongs = (state) => state.songs;
export const getSongById = ({ songs }, songId) =>
  songs.find((song) => song.id === songId);

export const getSongByCategory = ({ songs }, category) =>
  songs.filter((song) => song.category === category);

export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    default:
      return statePart;
  }
}
