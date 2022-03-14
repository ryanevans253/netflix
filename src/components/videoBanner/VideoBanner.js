import React from "react";
import PropTypes from "prop-types";
import "./videoBanner.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    {/* <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> */}
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/gPtPs22gtOA?controls=0&autoplay=1&mute=1&modestbranding=1&rel=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      autoplay="1"
      modestbranding
      autoplay="1"
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
