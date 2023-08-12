import React from 'react';
import video from '../testing_videos/Godzilla vs. Kong – Official Trailer (1).mp4';

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="video-info">
        <h1 className="title">
          <span>Title</span>
        </h1>
        <p className="desc">Description</p>
        <p className="date-duration-view">
          <span>CreatedAt</span>
          <span>14 Minutes</span>
          <span>Views</span>
        </p>
        <div className="publisher">
          <p className="username">Username</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
