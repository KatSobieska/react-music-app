import AudioPlayer from "../features/AudioPlayer";
import styles from "./Favourite.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFavorites,
  removeFromFavorites,
} from "../../redux/favoritesRedux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Favourite = () => {
  const favoriteSongs = useSelector(getAllFavorites);
  const dispatch = useDispatch();

  const handleUnfavorite = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <>
      {favoriteSongs.length !== 0 ? (
        <div className={styles.body}>
          {favoriteSongs.map((song, index) => (
            <div className={styles.favSong} key={index}>
              <AudioPlayer
                fileName={song.fileName}
                songImage={song.songImage}
                styles={{ borderRadius: "15px" }}
              />
              <button
                onClick={() => handleUnfavorite(song.id)}
                className={styles.buttonFav}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ marginBottom: "14px" }}
                  size="2x"
                />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noFavorites}>
          <p>You didn't add any song to favorites :(</p>
        </div>
      )}
    </>
  );
};

export default Favourite;
