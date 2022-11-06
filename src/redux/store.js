import songsReducer from "./songsRedux";
import categoriesReducer from "./categoriesRedux";
import videosReducer from "./videosRedux";
import favoritesReducer from "./favoritesRedux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import initialState from "./initialState";
import thunk from "redux-thunk";

const reducers = {
  songs: songsReducer,
  categories: categoriesReducer,
  videos: videosReducer,
  favorites: favoritesReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
