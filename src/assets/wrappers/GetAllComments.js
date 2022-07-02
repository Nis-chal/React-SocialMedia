import styled from "styled-components";

const Wrapper = styled.aside`
  background-color: var(--post-card-color);
  padding: 2%;
  border-radius:5%;
  .AllCommentSection {
    display: flex;
    align-items: center;

    & > .profile-photo {
      width: 25px;
    }

    & > .comment-info {
      & > .comment-content {
        margin-left: 7px;
        color: var(--color-secondary);
        font-size: 12px;
      }

      & > .comment-time {
        margin-left: 7px;
        font-size: 9px;

        color: grey;
        opacity: 0.4;
      }
    }
  }
`;

export default Wrapper;
