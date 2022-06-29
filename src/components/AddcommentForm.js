import { RiSendPlaneFill } from "react-icons/ri";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/CommentForm"
const AddcommentForm = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>

    <div className="comment-form">
      <form action="">
        <div className="comment-container">
          <img className="profile-photo" alt="" src={user.profilePicture} />
          <input type="text" className="comment-input" placeholder="Add Comment" />

          <RiSendPlaneFill className="send-comment-icon"/>
        </div>
      </form>
    </div>
    </Wrapper>
  );
};

export default AddcommentForm;
