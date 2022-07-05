import moment from "moment";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

const SingleComment = ({ item,cmtDelete }) => {
  const commentStates = {
    isEdited:item.content,
    notEdited:item.content,
    canEdit:true
  }
    const {commentDelete,user} = useAppContext()
    const [option,setOption] = useState(false)
    const [isDelete,setDelete] = useState(false)
    const [isContent,setContent] = useState(commentStates)

    const optionToggle = ()=>{
        setOption(!option)
    }
    const deleteC = () =>{
        commentDelete({ commentId: item._id });
        setDelete(true)
        cmtDelete()
    }

    const editToggle = (e)=>{
    
      setContent({...isContent,canEdit:!isContent.canEdit})
     
      
    }

  return (
    <div
      className={!isDelete ? "AllCommentSection" : "display-none"}
      key={item._id}
    >
      <img
        src={item.commentedBy.profilePicture}
        alt=""
        className="profile-photo"
      />
      <div className="comment-info">
        <div className="comment-info-content">
          <span className="comment-username">{item.commentedBy.username}</span>
          {/* <p className="comment-content"> {isContent.isEdited}</p> */}
          <input
            type="text"
            name="isEdited"
            className={isContent.canEdit?"comment-content":"comment-content underline"}
            value={isContent.isEdited}
            disabled={isContent.canEdit}
          />
        </div>
        <p className="comment-time">{moment(item.createdAt).fromNow()}</p>
      </div>
      {user.username === item.commentedBy.username ? (
        <BiDotsVerticalRounded className="eclipse-btn" onClick={optionToggle} />
      ) : (
        ""
      )}

      <div className={option ? "comment-setting" : "display-none"}>
        <AiFillEdit className="option" name="canEdit" onClick={editToggle} />
        <AiFillDelete className="option" onClick={deleteC} />
      </div>
    </div>
  );
};

export default SingleComment
