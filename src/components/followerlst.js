import React from 'react'
import RemoveFollowerbtn from '../components/RemoveFollowerbtn';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Followerlst = ({item,profileUser}) => {
    const {user} = useAppContext()
    const[isremoved,setRemoved] = useState(false)
  return (
    <div className={!isremoved ? "following-lists " : "display-none"}>
      <img className="profile-photo" src={item.profilePicture} alt="" />

      <Link to={`/profile/${item._id}`}>
        <div className="following-info">
          <span className="white-font">{item.username}</span>
          <div className="white-font">{item.name}</div>
        </div>
      </Link>
      <div className={user._id === profileUser._id ? "" : "visibility-hidden"}>
        <RemoveFollowerbtn
          followerId={item._id}
          clicked={() => setRemoved(true)}
        />
      </div>
    </div>
  );
}

export default Followerlst
