import NavBar from "../common/NavBar";
import BannerTop from "../views/BannerTop";
import styles from "./FirstPage.module.scss";

const FirstPage = () => {
  return (
    <div className={styles.page}>
      <BannerTop />
      <NavBar />
    </div>
  );
};

export default FirstPage;
