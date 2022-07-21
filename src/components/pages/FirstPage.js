import BannerTop from "../views/BannerTop";
import styles from "./FirstPage.module.scss";

const FirstPage = () => {
  return (
    <div className={styles.page}>
      <BannerTop />
    </div>
  );
};

export default FirstPage;
