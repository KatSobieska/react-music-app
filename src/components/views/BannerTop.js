import Search from "../features/Search";
import styles from "./BannerTop.module.scss";

const BannerTop = () => {
  return (
    <div className={styles.banner}>
      <img className={styles.photo} src={`/images/bannerTop.png`} alt=""></img>
      <Search />
    </div>
  );
};

export default BannerTop;
