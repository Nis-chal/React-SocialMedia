import { useEffect } from "react";
import Wrapper from "../assets/wrappers/GetAllComments";

const GetAllComments = () => {
  return (
    <Wrapper>
      <div className="AllCommentSection">
        <img
          src="https://developer99.com/metronic-admin/theme/assets/admin/pages/media/profile/profile_user.jpg"
          alt=""
          className="profile-photo"
        />
        <div className="comment-info">
          <p className="comment-content">hello</p>
          <p className="comment-time">a day ago</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default GetAllComments;
