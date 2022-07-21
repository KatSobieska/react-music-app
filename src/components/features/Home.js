import { getAllCategories } from "../../redux/categoriesRedux";
import CategoryBox from "../common/CategoryBox";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Home = () => {
  const categories = useSelector(getAllCategories);

  console.log("categories", categories);
  return (
    <div className={styles.home}>
      <div className={styles.first}>
        <div className={styles.popular}>CZESC</div>
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
      <div className={styles.discover}>WITAJ</div>
    </div>
  );
};

Home.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageName: PropTypes.string,
};

export default Home;
