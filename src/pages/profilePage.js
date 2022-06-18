import { useAppContext } from "../context/appContext";
import { AiFillSetting, AiTwotoneHome } from "react-icons/ai";
import Wrapper from "../assets/wrappers/Profile";
import {GoGlobe} from "react-icons/go"
import { useState } from "react";
import { HiLocationMarker, HiUser } from "react-icons/hi";
import {MdDescription} from "react-icons/md"
 
const Profile = () => {
  const { user } = useAppContext();

 

  const [tab,tabtoggle] = useState(0);

  const ontoggle = (index) =>{
    tabtoggle(index)

  }

  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-content">
          <div className="profile-images">
            <img
              src="https://i.pinimg.com/originals/c5/78/d7/c578d78c35b57d5f033dbf40edc4ee27.jpg"
              alt=""
              className="profile-photo"
            />

            <img
              src="https://thumbs.gfycat.com/AliveFreshHeifer-size_restricted.gif"
              alt=""
              className="profile-cover"
            />
            <span className="profile-username">username</span>
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
              <div><HiUser/> name</div>
              <span><HiLocationMarker/> location</span>
              <p><MdDescription/> profile descriptioni</p>
            </div>
            <div className="photo-section">
              <h1>photo</h1>
              <div className="profile-collection">
                <img
                  src="https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1611643378160-39d6dd915b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={tab === 1 ? "profile-posts" : "display-none"}>
            <img
              src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
