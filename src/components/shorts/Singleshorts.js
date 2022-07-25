import React, { useState, useEffect, useRef } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { FcMusic } from "react-icons/fc";
const Singleshorts = ({ item }) => {
  const vidRef = useRef(null);

  const onentry = () => {
    vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current.pause();
  };

  return (
    <div className="hello">
      <video
        ref={vidRef}
        className="videos"
        controls={true}
        onMouseEnter={onentry}
        onMouseLeave={onleave}
        src={item.video}
      />

      <div className="user-info">
        <img
          src={item.userid.profilePicture}
          className="profile-photo"
          alt=""
        />
        <h6>{item.userid.username}</h6>
      </div>

      <div className="shorts-options">
        <AiFillLike className="shorts-icon" />
        <AiFillDislike className="shorts-icon" />
        <BsBookmarkFill className="shorts-icon" />
        <div className="music-container">
          <FcMusic className="music-icon" />
        </div>
      </div>

      <p className="description">
        {item.description}
      </p>
    </div>
  );
};

export default Singleshorts;
