import React from "react";
import ReactPlayer from "react-player";
import { getAllVideos } from "../../redux/videosRedux";
import styles from "./Videos.module.scss";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Videos = () => {
  const videos = useSelector(getAllVideos);
  console.log("videos", videos);

  return (
    <div className={styles.body}>
      <div className={styles.videos}>
        {videos.map((video) => (
          <ReactPlayer
            className={styles.video}
            url={video.videoPath}
            controls={true}
          />
        ))}
      </div>
    </div>
  );
};

Videos.propTypes = {
  id: PropTypes.string,
  videoPath: PropTypes.string,
};

export default Videos;
