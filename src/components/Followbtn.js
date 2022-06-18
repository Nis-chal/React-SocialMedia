import { useAppContext } from "../context/appContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



const Followbtn = () => {
    const {
      user,
      
      profileUser,
      
      followUser,
      buttontype,
      unfollowUser,
    } = useAppContext();
  const [followed, setFollowed] = useState(false);
  const { id: userId } = useParams();

  useEffect(()=>{
      if (profileUser.followers?.find((followers) => followers === user._id)) {
        setFollowed(true);
      } else {
        setFollowed(false);
      }
  },[userId])

  
    const togglefollow = () => {
      if (!followed) {
        followUser(userId);
        setFollowed(true);
      } else {
        unfollowUser(userId);
        setFollowed(false);
      }
    };


  return user._id === profileUser._id ? (
    <button className="btn btn-follow follow-btn">Edit Profile</button>
  ) : followed ? (
    <button
      className="btn btn-follow follow-btn"
      disabled={buttontype}
      onClick={() => togglefollow()}
    >
      follow
    </button>
  ) : (
    <button
      className="btn btn-follow follow-btn"
      disabled={buttontype}
      onClick={() => togglefollow()}
    >
      unfollow
    </button>
  );
};

export default Followbtn;
