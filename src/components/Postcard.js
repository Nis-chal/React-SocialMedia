import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import Wrapper from "../assets/wrappers/PostCard";
import irene from "../assets/images/irene.jpg";
import data from "./data";
import ImageSlider from "./imageSlider";

const PostCard = ({ item }) => {
  return (
    <Wrapper>
      <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src={item.userid.profilePicture} alt="" />
            </div>
            <div className="ingo">
              <h3>{item.userid.username}</h3>
              <small>{item.location === undefined?"":item.location} ,15 MINUTES AGO</small>
            </div>
          </div>
          <span className="edit react-icons">
            <BiDotsHorizontalRounded className="react-icons" />
          </span>
        </div>
        <div className="photo">
          <ImageSlider data={item.images} />
        </div>

        <div className="dot-btns">
          <button className="dot-btn"></button>
        </div>
        <div className="action-buttons">
          <div className="interaction-buttons">
            <span>
              <AiOutlineHeart className="react-icons love-icons" />
            </span>
            <span>
              <FaRegComment className="react-icons comment-icons" />{" "}
            </span>
            <span>
              <i className="uil uil-share-alt"></i>
            </span>
          </div>
          <div className="bookmark">
            <span>
              <BsBookmark className="react-icons" />
            </span>
          </div>
        </div>

        <div className="liked-by">
          <span>
            <img src={irene} alt="" />
          </span>
          <span>
            <img src={irene} alt="" />
          </span>
          <span>
            <img src={irene} alt="" />
          </span>
          <p>
            Liked by <b>Ernest Achiever</b> and <b>2, 323 others</b>
          </p>
        </div>
        <div className="caption">
          <p>
            <b>{item.userid.username}</b> {item.description}.{" "}
            <span className="harsh-tag">#lifestyle</span>
          </p>
        </div>
        <div className="comments text-muted">View all 277 comments</div>
      </div>
    </Wrapper>
  );
};

export default PostCard;
