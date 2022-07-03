import moment from "moment";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
const SingleComment = ({ item }) => {

    const [option,setOption] = useState(false)
    const optionToggle = ()=>{
        setOption(!option)
    }
  return (
    <div className="AllCommentSection" key={item._id}>
      <img
        src={item.commentedBy.profilePicture}
        alt=""
        className="profile-photo"
      />
      <div className="comment-info">
        <div className="comment-info-content">
          <span className="comment-username">{item.commentedBy.username}</span>
          <p className="comment-content">{item.content}</p>
        </div>
        <p className="comment-time">{moment(item.createdAt).fromNow()}</p>
      </div>
      <BiDotsVerticalRounded className="eclipse-btn" onClick={optionToggle} />

      <div className={option?"comment-setting":"display-none"}>
        <AiFillEdit />
        <AiFillDelete />
      </div>
    </div>
  );
};

export default SingleComment
