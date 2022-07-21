import songsReducer from "./songsRedux";
import categoriesReducer from "./categoriesRedux";
import videosReducer from "./videosRedux";
import { combineReducers, createStore } from "redux";
import initialState from "./initialState";

const reducers = {
  songs: songsReducer,
  categories: categoriesReducer,
  videos: videosReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
