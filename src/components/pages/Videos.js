import React from "react";
import ReactPlayer from "react-player";
import styles from "./Videos.module.scss";

const Categories = () => {
  return (
    <div className={styles.body}>
      <div className={styles.videos}>
        <ReactPlayer
          className={styles.video}
          url="https://www.youtube.com/watch?v=Hw278qY6Erw"
          controls={true}
        />
        <ReactPlayer
          className={styles.video}
          url="https://www.youtube.com/watch?v=sNhHMvxpzUw"
          controls={true}
        />
        <ReactPlayer
          className={styles.video}
          url="https://www.youtube.com/watch?v=-MWZU9zn3mU"
          controls={true}
        />
        <ReactPlayer
          className={styles.video}
          url="https://www.youtube.com/watch?v=S5sUwhQ8nTM"
          controls={true}
        />
      </div>
    </div>
  );
};

export default Categories;
