import { RiSendPlaneFill } from "react-icons/ri";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/CommentForm"
import {useState} from "react"
import InputEmoji from "react-input-emoji";

const AddcommentForm = () => {
  const { user } = useAppContext();
  const [text, setText] = useState("");

 

  return (
    <Wrapper>
      <div className="comment-form">
        <form action="">
          <div className="comment-container">
            <img className="profile-photo" alt="" src={user.profilePicture} />
            <InputEmoji
              value={text}
            
              cleanOnEnter
              onChange={setText}
            />
            {/* <input
              type="text"
              className="comment-input"
              placeholder="Add Comment"
            /> */}

            <RiSendPlaneFill className="send-comment-icon" />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddcommentForm;
