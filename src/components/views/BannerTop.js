import Search from "../common/Search";
import styles from "./BannerTop.module.scss";

const BannerTop = () => {
  return (
    <div className={styles.banner}>
      <img className={styles.photo} src={`/images/bannerTop1.png`} alt=""></img>
      <Search />
    </div>
  );
};

export default BannerTop;
