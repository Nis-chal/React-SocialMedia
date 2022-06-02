import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import Wrapper from "../assets/wrappers/PostCard";
import irene from "../assets/images/irene.jpg";
import ImageSlider from "./imageSlider";
import moment from "moment";
import { useState,useEffect } from "react";
import { useAppContext } from "../context/appContext";

const PostCard = ({ item }) => {
  const { likepost,user ,unlikepost} = useAppContext();

  const [liked, setLike] = useState(false);
  // Likes
  useEffect(() => {
    if (item.likesid.find((like) => like._id !== user._id)) {
      setLike(true);
    } else {
      setLike(false);
      
    }
  }, [item.likesid,user._id]);

  const togglelike = (e) => {
    e.preventDefault();
    const postid = item._id;

    if (!liked) {
      likepost({ postid });
      setLike(true);
    }
    unlikepost({postid})
    setLike(false)
  };
  return (
    <Wrapper>
      <div className="feed">
        <div className="head">
          <div className="user">
            <div>
              <img
                className="profile-photo"
                src={item.userid.profilePicture}
                alt=""
              />
            </div>
            <div className="ingo">
              <h3>{item.userid.username}</h3>
              <small>
                {item.location === "undefined" ? "" : `${item.location} ,`}

                {moment(item.createdAt).fromNow()}
              </small>
            </div>
          </div>
          <span className="edit react-icons">
            <BiDotsHorizontalRounded className="react-icons" />
          </span>
        </div>
        <div className="photo">
          <ImageSlider data={item.images} />

          <AiFillHeart className={liked ? `likeanimation` : "display-none"} />
        </div>

        <div className="dot-btns">
          {item.images.map((index) => {
            return <button key={index} className="dot-btn"></button>;
          })}
        </div>
        <div className="action-buttons">
          <div className="interaction-buttons">
            <span>
              {!liked ? (
                <AiOutlineHeart
                  className="react-icons love-icons"
                  onClick={togglelike}
                />
              ) : (
                <AiFillHeart
                  className="react-icons love-icons red-fill"
                  onClick={togglelike}
                />
              )}
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
            Liked by <b>Ernest Achiever</b> and{" "}
            <b>{item.likesid.length} others</b>
          </p>
        </div>
        <div className="caption">
          <p>
            <b>{!item.description ? "" : `${item.userid.username} `}</b>
            &nbsp;
            {item.description === "undefined" ? "" : `${item.description} `}
          </p>
        </div>
        <div className="comments text-muted">View all 277 comments</div>
      </div>
    </Wrapper>
  );
};

export default PostCard;
