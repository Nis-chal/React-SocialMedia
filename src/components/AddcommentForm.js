import { RiSendPlaneFill } from "react-icons/ri";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/CommentForm";
import { useState } from "react";

const AddcommentForm = ({ postId }) => {
  const { user, commentOnPost } = useAppContext();
  const [replys, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    commentOnPost({ commentInfo: replys, postId });
  };
  return (
    <Wrapper>
      <div className="comment-form">
        <form action="">
          <div className="comment-container">
            <img className="profile-photo" alt="" src={user.profilePicture} />

            <input
              type="text"
              className="comment-input"
              placeholder="Add Comment"
              value={replys}
              onChange={handleChange}
            />

            <RiSendPlaneFill className="send-comment-icon" onClick={onSubmit} />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddcommentForm;
