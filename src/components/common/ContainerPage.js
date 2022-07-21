import styles from "./ContainerPage.module.scss";

const ContainerPage = (props) => {
  return <div className={styles.containerPage}>{props.children}</div>;
};

export default ContainerPage;
