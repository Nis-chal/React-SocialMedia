import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import Wrapper from "../assets/wrappers/PostCard";
import irene from "../assets/images/irene.jpg";
import ImageSlider from "./imageSlider";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AddcommentForm, GetAllComments } from "../components";
import { ChooseCollection,BookMarkModal } from "./collection";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import {BsFillBookmarkFill} from 'react-icons/bs'

const PostCard = React.memo(({ item }) => {
  // const postbio = {
  //   likec: "",
  //   profilep: "",
  // };
  const { likepost, user, unlikepost, deletePost,allComments } = useAppContext();

  const [liked, setLike] = useState(false);
  const [likecount, setLikCount] = useState(0);
  const [isuser, setUser] = useState();
  const [dropdown, setdropdown] = useState(false);
  // const [posti, setPostI] = useState(postbio);
  const [deleteFeed, setDeleteP] = useState(false);
  const [isComment, setComment] = useState(false);
  const [allComment, setallComment] = useState(false);
  const [listedComment,setList] = useState(false)
  const [commentCount, setCommentCount] = useState(0);
  const [collectionlstvalue,setCollectiontoggle] = useState(false)
  const [bookmarked,setbookmark] = useState(false)
  const [onAdd,setAddbookmark] = useState(false)

  const commentToggle = () => {
    
    if(allComment){
      
      allComments({postId:item._id})
      setallComment(!allComment);
    }
      setallComment(!allComment);

  };
 
  const savepost =()=>{
    
    setbookmark(!bookmarked)
    setCollectiontoggle(true)
  }
 

  // Likes
  useEffect(() => {
    // setPostI({
    //   ...posti,
    //   [posti.likec]: item.likesid.length,
    //   [posti.profilep]: item.userid.profilePicture,
    // });
    setLikCount(item.likesid.length);
    setCommentCount(item.commentsid.length);
    if (item.likesid.find((like) => like === user._id)) {
      setLike(true);
    } else {
      setLike(false);
    }
    if (item.userid._id === user._id) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [item.likesid, user._id,item]);

  const toggledropdown = () => {
    setdropdown(!dropdown);
  };

  const removePost = (postid) => {
    deletePost(postid);
    setDeleteP(true);
  };

  const togglelike = (e) => {
    e.preventDefault();
    const postid = item._id;

    if (!liked) {
      likepost({ postid });
      setLike(true);
      setLikCount((value) => value + 1);
    } else {
      unlikepost({ postid });
      setLike(false);
      setLikCount((value) => value - 1);
    }
  };

  const toggleComment = () => {
    setComment(!isComment);
  };

  const commentAdded = ()=>{
    
    setCommentCount((value)=>value + 1)
    setList(!listedComment)
    

  }
    const commentDeleted = () => {
      // setList(!listedComment);

      setCommentCount((value) => value - 1);
    };
  return (
    <Wrapper>
      <div className={deleteFeed ? "display-none" : "feed"}>

        <div className="head">
          <div className="user">
            <div>
              <img
                className="profile-photo"
                src={item.userid?item.userid.profilePicture:''}
                alt=""
              />
            </div>
            <div className="ingo">
              <Link to={`/profile/${item.userid._id}`}>
                <h3>{item.userid.username}</h3>
              </Link>
              <small>
                {item.location === "undefined" ? "" : `${item.location} ,`}

                {moment(item.createdAt).fromNow()}
              </small>
            </div>
          </div>
          <span className="edit react-icons">
            {isuser ? (
              <BiDotsHorizontalRounded
                className="react-icons"
                onClick={toggledropdown}
              />
            ) : (
              <div></div>
            )}
          </span>
        </div>
        <div className="photo">

          <ImageSlider data={item} />

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
              <FaRegComment
                className="react-icons comment-icons"
                onClick={toggleComment}
              />{" "}
            </span>
            <span>
              <i className="uil uil-share-alt"></i>
            </span>
          </div>
          <div className="bookmark">
      <ChooseCollection className='collection-container' display={collectionlstvalue}  postId = {item._id}/>


            <span>
              {!bookmarked?
              

              <BsBookmark className="react-icons" onClick={savepost} />:
              <BsFillBookmarkFill className="react-icons" onClicked={savepost} />
            }
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
            Liked by <b>Ernest Achiever</b> and <b>{likecount} others</b>
          </p>
        </div>
        <div className="caption">
          <p>
            <b>{!item.description ? "" : `${item.userid.username} `}</b>
            &nbsp;
            {item.description === "undefined" ? "" : `${item.description} `}
          </p>
        </div>
        <div className="comments text-muted" onClick={commentToggle}>
          View all {commentCount?? item.commentsid.length} comments
        </div>

        

        <div className={allComment ? "" : "display-none"}>
          <GetAllComments postId={item._id} change={listedComment} cmtDelete={commentDeleted} />
        </div>

        {dropdown ? (
          <div className="edit-dropdown">
            <Link to={`/user/postdetail/${item._id}`}>
              <FiEdit className="action-icon" />
            </Link>
            <MdDelete
              className="action-icon"
              onClick={() => removePost(item._id)}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className={isComment ? "" : "display-none"}>
        <AddcommentForm postId={item._id} setLcomment={commentAdded } list={listedComment}/>
      </div>
          <BookMarkModal className="bookmarkmodal" isModal={true} image={item.images[0]}/>

    </Wrapper>
  );
});

export default PostCard;
