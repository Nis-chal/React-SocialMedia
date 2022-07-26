import React, { useState, useEffect, useRef } from "react";
import {
  AiFillLike,
  AiFillDislike,
 
} from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { FcMusic } from "react-icons/fc";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
const Singleshorts = ({ item }) => {
  const {addlikeShorts,token,unlikeShorts,dislikeShorts,undislikeShorts} = useAppContext()
  const [isliked, setLiked] = useState(false);
  const [isdisliked, setdisliked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lcount,setlcount] = useState(0)


  const vidRef = useRef(null);

  const onliked = ()=>{
    setLiked(true)
    addlikeShorts({shortid:item._id})
    if(isdisliked){

      setdisliked(false)
    }
  }

  

  const onremovelike = () => {
      if(isliked){
        setlcount(lcount-1)
        unlikeShorts({shortid:item._id})

        setLiked(false);
      }
      
    };

  const ondisliked =()=>{
    setdisliked(true)
    dislikeShorts({shortid:item._id})
    if (isliked) {
      setLiked(false);
      setlcount(lcount - 1);

    }
  }

  const removedislike = ()=>{
    setdisliked(false)
    undislikeShorts({shortid:item._id})

  }

  const onentry = () => {
    vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current.pause();
  };


  useEffect(()=>{
    axios.get(
      `/api/v1/shorts/${item._id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res)=>{
      setLiked(res.data.islike)
      setdisliked(res.data.isdislike)
      setlcount(item.likesid.length)
      setLoading(false)
    });

  },[token,item._id])


   if (loading) {
     return <div></div>;
   }

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
        <BsBookmarkFill className="shorts-icon " />
        <div className="music-container">
          <FcMusic className="music-icon" />
        </div>
      </div>

      <p className="description">{item.description}</p>
    </div>
  );
};

export default Singleshorts;
