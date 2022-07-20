import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClock,
  faCompass,
  faHeart,
  faHome,
  faMusic,
  faPalette,
  faPeopleArrows,
  faPeopleGroup,
  faRadio,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li className={styles.logo}>
          <a href="#">music app</a>
        </li>

        <li className={styles.home}>
          <a href="#">
            <FontAwesomeIcon
              icon={faHome}
              className={styles.icon}
            ></FontAwesomeIcon>
            Home
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faCompass}
              className={styles.icon}
            ></FontAwesomeIcon>
            Feed
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faRadio}
              className={styles.icon}
            ></FontAwesomeIcon>
            Radio
          </a>
        </li>
        <li className={styles.collection}>
          <a href="#" className={styles.title}>
            Your Collection
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faClock}
              className={styles.icon}
            ></FontAwesomeIcon>
            Recently played
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.icon}
            ></FontAwesomeIcon>
            Favourite songs
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faPeopleArrows}
              className={styles.icon}
            ></FontAwesomeIcon>
            Artists
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faBook}
              className={styles.icon}
            ></FontAwesomeIcon>
            Albums
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faVideo}
              className={styles.icon}
            ></FontAwesomeIcon>
            Videos
          </a>
        </li>
        <li className={styles.following}>
          <a href="#" className={styles.title}>
            Following
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faPalette}
              className={styles.icon}
            ></FontAwesomeIcon>
            Labels
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faMusic}
              className={styles.icon}
            ></FontAwesomeIcon>
            Genres
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className={styles.icon}
            ></FontAwesomeIcon>
            Fans
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
