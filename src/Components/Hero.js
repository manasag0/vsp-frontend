import React from "react";

const Hero = ({ firstVideo }) => {
  const { title, desc, videoURL, username, views, createdAt } = firstVideo;

  return videoURL ? (
    <div className="hero">
      <video autoPlay loop muted className="background-video">
        <source
          src={`http://localhost:4000/api/videos/video/${videoURL.slice(8)}`}
        />
      </video>
      <div className="video-info">
        <h1 className="title">
          <span>{title}</span>
        </h1>
        <p className="desc">{desc}</p>
        <p className="date-duration-view">
          <span>{new Date().toDateString(createdAt)}</span>
          <span className="spacer"></span>
          <span>{views} Views</span>
        </p>
        <div className="publisher">
          <span className="img">
            <img
              src="https://fontawesomeicons.com/lib/svg/person-circle.svg"
              alt="Publisher Icon"
              width="20"
              height="20"
            />
          </span>
          <p className="username">{username}</p>
        </div>
      </div>
    </div>
  ) : (
    <h2>Loading</h2>
  );
};

export default Hero;
