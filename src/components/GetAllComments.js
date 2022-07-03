import Wrapper from "../assets/wrappers/GetAllComments";
import { useAppContext } from "../context/appContext";
import React, { useState, useEffect } from "react";

import axios from "axios";
import moment from "moment";

const GetAllComments = React.memo(({ postId }) => {
  const { token } = useAppContext();

  const [ListOfComment, setComment] = useState([]);

  const listOutComment = ({ comment }) => {
    setComment(comment);
  };
  useEffect(() => {
    axios
      .get(`/api/v1/comment/get/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => listOutComment({ comment: res.data.comment }));
  }, [postId, token]);

  return (
    <Wrapper>
      {ListOfComment.map((item) => {
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
          </div>
        );
      })}
    </Wrapper>
  );
});

export default GetAllComments;
