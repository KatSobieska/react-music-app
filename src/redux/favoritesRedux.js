export const getAllFavorites = ({ favorites }) => favorites.data;

const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavorites = (payload) => {
  return {
    type: ADD_TO_FAVORITES,
    payload,
  };
};
export const removeFromFavorites = (payload) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload,
  };
};

const initialState = {
  data: [],
};

export default function reducer(statePart = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...statePart,
        data: [...statePart.data.filter((item) => item.id !== action.payload)],
      };
    default:
      return statePart;
  }
}
