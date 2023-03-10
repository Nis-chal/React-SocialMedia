import { useAppContext } from "../context/appContext";
// import { AiFillSetting, AiTwotoneHome } from "react-icons/ai";

import { useEffect } from "react";
import Wrapper from "../assets/wrappers/Profile";
import { GoGlobe } from "react-icons/go";
import { useState } from "react";
import { HiLocationMarker, HiUser } from "react-icons/hi";
import { MdDescription } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import {FaImages} from "react-icons/fa"

import {
  Loading,
  PostCard,
  Followbtn,
  UserForm,
  FollowAction,
  RemoveFollwerbtn,
  Followerlst
} from "../components";

import Singleshorts2 from "../components/shorts/Singleshorts2";

const Profile = () => {
  const {
    user,
    userProfile,
    profileUser,
    profilePost,
    isLoading,
    followers,
    followings,
    usershort,
    profilePicture
    
    
  } = useAppContext();
  const { id: userId } = useParams();
  // const [toggled, istoggle] = useState(false);
  const [reload,setReload] = useState(false)

  useEffect(() => {
    userProfile(userId);
  }, [userId,profilePicture]);


  const toreload = ()=>{
    setReload(!reload)
  }
  

  const [tab, tabtoggle] = useState(1);

  const ontoggle = (index) => {
    tabtoggle(index);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-content">
          <div className="profile-images">
            <img
              src={profileUser.profilePicture}
              alt=""
              className="profile-photo"
            />

            <img src={profileUser.coverpage} alt="" className="profile-cover" />
            <span className="profile-username">{profileUser.username}</span>
            <Followbtn items={profileUser} clicked={() => ontoggle(6)} />
          </div>
          <div className="profile-info">
            <div className="profile-info-content">
              <button
                onClick={() => ontoggle(1)}
                className={tab === 1 ? "tab active" : "tab"}
              >
                Timeline
              </button>
              <button
                onClick={() => ontoggle(2)}
                className={tab === 2 ? "tab active" : "tab"}
              >
                followers
              </button>
              <button
                onClick={() => ontoggle(3)}
                className={tab === 3 ? "tab active" : "tab"}
              >
                following
              </button>

              <button
                onClick={() => ontoggle(7)}
                className={tab === 7 ? "tab active" : "tab"}
              >
                Shorts
              </button>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-left">
            <div className="profile-intro">
              <div className="intro-header">
                <GoGlobe />
                <h1> Intro</h1>
              </div>
              <div>
                <HiUser /> {profileUser.name}
              </div>
              <span>
                <HiLocationMarker /> {profileUser.location}
              </span>
              <p>
                <MdDescription /> {profileUser.email}
              </p>
            </div>
            <div className={tab === 5 ? "display-none" : "photo-section"}>
              <div className="photo-section-header">
                <h1>photo</h1>
                <button className="no-btn" onClick={() => ontoggle(5)}>
                  view all
                </button>
              </div>
              <div className="profile-collection">
                {profilePost.length > 0 ? (
                  profilePost.slice(0, 6).map((item, index) => {
                    return <img src={item.images[0]} alt="" key={item._id} />;
                  })
                ) : (
                  <div>No Posts Uploaded</div>
                )}
              </div>
            </div>
          </div>
          <div className={tab === 5 ? "profile-posts" : "display-none"}>
            {profilePost.map((item, index) => {
              return (
                <Link
                  to={`/user/detailpost/${item._id}`}
                  className="profile-posts-link"
                >
                  <div className="profile-posts-content">
                    <img src={item.images[0]} alt="" key={item._id} />
                    <FaImages
                      className={
                        item.images.length > 1 ? "multipleimage" : "d-none"
                      }
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={tab === 1 ? "timeline" : "display-none"}>
            {profilePost.map((item, index) => {
              return <PostCard item={item} index={item} key={index} />;
            })}
          </div>

          <div className={tab === 7 ? "timeline" : "display-none"}>
            {usershort.map((item, index) => {
              return <Singleshorts2 item={item} index={item} key={index} />;
            })}
          </div>

          <div className={tab === 6 ? "" : "display-none"}>
            <UserForm info={profileUser} reload={toreload} />
          </div>

          <div className={tab === 2 ? "userlst" : "display-none"}>
            {followers.map((item) => {
              return (
                // <div className="following-lists ">
                //   <img
                //     className="profile-photo"
                //     src={item.profilePicture}
                //     alt=""
                //   />

                //   <Link to={`/profile/${item._id}`}>
                //     <div className="following-info">
                //       <span>{item.username}</span>
                //       <div>{item.name}</div>
                //     </div>
                //   </Link>
                //   <div
                //     className={
                //       user._id === profileUser._id ? "" : "visibility-hidden"
                //     }
                //   >
                //     <RemoveFollwerbtn followerId={item._id} />
                //   </div>
                // </div>
                <Followerlst item={item} profileUser = {profileUser}/>
              );
            })}
          </div>

          <div className={tab === 3 ? "userlst" : "display-none"}>
            {followings.map((item) => {
              return (
                <div className="following-lists ">
                  <img
                    className="profile-photo"
                    src={item.profilePicture}
                    alt=""
                  />
                  <Link to={`/profile/${item._id}`}>
                    <div className="following-info">
                      <span className="white-font">{item.username}</span>
                      <div className="white-font">{item.name}</div>
                    </div>
                  </Link>
                  <div
                    className={
                      user._id === profileUser._id ? "" : "visibility-hidden"
                    }
                  >
                    <FollowAction followinguser={item._id} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
