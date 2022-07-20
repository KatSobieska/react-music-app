import styles from "./BannerTop.module.scss";

const BannerTop = () => {
  return (
    <div className={styles.banner}>
      <img className={styles.photo} src={`/images/bannerTop.png`} alt=""></img>
    </div>
  );
};

export default BannerTop;
