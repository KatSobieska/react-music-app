import ReactAudioPlayer from "react-audio-player";
import styles from "./AudioPlayer.module.scss";
import React from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {
  AudioPlayer.propTypes = {
    id: PropTypes.string,
    fileName: PropTypes.string,
    songImage: PropTypes.string,
  };

  return (
    <div className={styles.player}>
      <img
        src={`/images/${props.songImage}.png`}
        alt=""
        width={55}
        height={55}
        style={{ borderRadius: "15px" }}
      ></img>
      <ReactAudioPlayer src={`/songs/${props.fileName}`} controls />
    </div>
  );
};

export default AudioPlayer;
