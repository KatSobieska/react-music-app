import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const Video = (props) => {
  Video.propTypes = {
    id: PropTypes.string,
  };

  <ReactPlayer url={props.videoPath} controls={true} />;
};
export default Video;
