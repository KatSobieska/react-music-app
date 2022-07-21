import styles from "./Search.module.scss";

const Search = () => {
  return (
    <input type="text" placeholder="search..." className={styles.input}></input>
  );
};

export default Search;
