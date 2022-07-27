import React, { useState, useEffect, useRef } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { FcMusic } from "react-icons/fc";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Singleshorts = ({ item }) => {
  const {
    addlikeShorts,
    token,
    unlikeShorts,
    dislikeShorts,
    undislikeShorts,
    deleteShorts,
    user,
  } = useAppContext();
  const [isliked, setLiked] = useState(false);
  const [isdisliked, setdisliked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lcount, setlcount] = useState(0);
  const [option, setOption] = useState(false);
  const [isdelete, setDelete] = useState(false);
  const [saved, setSaved] = useState(false);

  const vidRef = useRef(null);

  const onliked = () => {
    setLiked(true);
    addlikeShorts({ shortid: item._id });
    setlcount(lcount + 1);
    if (isdisliked) {
      setdisliked(false);
    }
  };

  const menu = () => {
    setOption(!option);
  };

  const ondelete = (value) => {
    setDelete(true);
    deleteShorts(value);
  };

  const onremovelike = () => {
    if (isliked) {
      setlcount(lcount - 1);
      unlikeShorts({ shortid: item._id });

      setLiked(false);
    }
  };

  const ondisliked = () => {
    setdisliked(true);
    dislikeShorts({ shortid: item._id });
    if (isliked) {
      setLiked(false);
      setlcount(lcount - 1);
    }
  };

  const removedislike = () => {
    setdisliked(false);
    undislikeShorts({ shortid: item._id });
  };

  const onentry = () => {
    vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current.pause();
  };

  useEffect(() => {
    axios
      .get(
        `/api/v1/shorts/${item._id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLiked(res.data.islike);
        setdisliked(res.data.isdislike);
        setlcount(item.likesid.length);
        setLoading(false);
      });
  }, [token, item._id, item.likesid.length]);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className={!isdelete ? "hello" : "display-none"}>
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
        <div className="like-section">
          {isliked ? (
            <AiFillLike className="shorts-icon blue" onClick={onremovelike} />
          ) : (
            <AiFillLike className="shorts-icon " onClick={onliked} />
          )}
          <div className="count">{lcount}</div>
        </div>
        {isdisliked ? (
          <AiFillDislike className="shorts-icon blue" onClick={removedislike} />
        ) : (
          <AiFillDislike className="shorts-icon " onClick={ondisliked} />
        )}
        <BsBookmarkFill
          className={!saved ? "shorts-icon " : "shorts-icon fill-color"}
          onClick={() => setSaved(!saved)}
        />
        <div className="music-container">
          <FcMusic className="music-icon" />
        </div>
      </div>

      <BiDotsHorizontalRounded
        className={!user._id.toString() === item.userid ? "dot" : "display-none"}
        onClick={menu}
      />

      <MdDelete
        onClick={() => ondelete(item._id)}
        className={option ? "delete-icon" : "display-none"}
      />

      <p className="description">{item.description}</p>
    </div>
  );
};

export default Singleshorts;
