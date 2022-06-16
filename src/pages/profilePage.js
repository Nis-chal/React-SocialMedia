import { useAppContext } from "../context/appContext";
import { AiFillSetting } from "react-icons/ai";
import Wrapper from "../assets/wrappers/Profile";
const Profile = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <div className="profile">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://i.pinimg.com/originals/c5/78/d7/c578d78c35b57d5f033dbf40edc4ee27.jpg"
              alt=""
              className="profile-photo"
            />
          </div>
          <div className="profile-info">
            <div className="profile-info-content">
              <span>username</span>
              <button className="btn btn-primary">Edit profile</button>
              <AiFillSetting />
            </div>
            <div className="pff-count">
              <div>Posts</div>
              <div>followers</div>
              <div>following</div>

              <div>100</div>
              <div>100</div>
              <div>100</div>
            </div>
            <p>profile descriptioni</p>
          </div>
        </div>
        <div className="profile-posts">
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
    </Wrapper>
  );
};

export default Profile;
