import { getAllCategories } from "../../redux/categoriesRedux";
import CategoryBox from "../common/CategoryBox";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import AudioPlayer from "./AudioPlayer";
import { getAllSongs, getRecommendedSongs } from "../../redux/songsRedux";
import { useState } from "react";
import Favourite from "../pages/Favourite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToFavorites } from "../../redux/favoritesRedux";

const Home = () => {
  const [randomSong, setRandomSong] = useState("");
  const categories = useSelector(getAllCategories);
  const recommendedSongs = useSelector(getRecommendedSongs);
  const songs = useSelector(getAllSongs);
  const dispatch = useDispatch();

  const handleDiscover = () => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    setRandomSong(randomSong);
  };

  const handleFavorite = (e) => {
    dispatch(addToFavorites(e));
  };

  return (
    <div className={styles.home}>
      <div className={styles.first}>
        <p className={styles.recommended}>Recommended</p>
        <div className={styles.popular}>
          {recommendedSongs.map((song, index) => (
            <div className={styles.song} key={index}>
              <AudioPlayer
                fileName={song.fileName}
                songImage={song.songImage}
                styles={{ borderRadius: "15px" }}
              />
              <button
                onClick={() => handleFavorite(song)}
                className={styles.buttonFav}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ marginBottom: "14px" }}
                  size="2x"
                />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.categories}>
          <p>Categories</p>
          <div className={styles.categoryBoxes}>
            {categories.map((category, index) => (
              <CategoryBox
                key={index}
                name={category.name}
                imageName={category.imageName}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.discover}>
        <p>Discover a new song!</p>
        <div className={styles.body}>
          <button
            className={styles.searchButton}
            onClick={() => handleDiscover()}
          >
            Search
          </button>
          {randomSong && (
            <div className={styles.song}>
              <AudioPlayer
                fileName={randomSong.fileName}
                songImage={randomSong.songImage}
                styles={{ borderRadius: "15px" }}
              />
              <button
                onClick={() => handleFavorite(randomSong)}
                className={styles.buttonFav}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ marginBottom: "14px" }}
                  size="2x"
                />
              </button>
            </div>
          )}
        </div>
        <p>Favourites songs</p>
        <Favourite />
      </div>
    </div>
  );
};

Home.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageName: PropTypes.string,
};

Home.propTypes = {
  fileName: PropTypes.string,
  recommendedImage: PropTypes.string,
};

export default Home;
