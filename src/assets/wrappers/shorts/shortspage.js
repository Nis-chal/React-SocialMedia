import styled from "styled-components";

const Wrapper = styled.aside`
  .video-container {
    overflow-y: scroll;
    height: 90vh;

    .fill-color {
      color: yellow;
    }

    & > .hello {
      background-color: var(--post-card-color);
      display: flex;
      padding-top: 10px;
      flex-direction: column;
      justify-content: center;
      position: relative;

      & .dot {
        position: absolute;
        top: 6%;
        right: 11%;
      }

      & .delete-icon {
        color: white;
        position: absolute;
        top: 10%;
        right: 10%;
        font-size: 25px;
        background-color: var(--post-card-color);
        backdrop-filter: blur(20px);
        padding: 0.2%;
      }

      & > .description {
        position: absolute;
        bottom: 13%;
        width: 40%;
        left: 10%;
        text-align: start;
      }

      & > .user-info {
        display: flex;
        align-items: center;
        gap: 10px;

        position: absolute;
        top: 20px;
        left: 50px;
        & > .profile-photo {
          width: 30px;
          height: 30px;
        }
      }

      & > .shorts-options {
        display: flex;
        font-size: 25px;
        gap: 20px;
        flex-direction: column;
        position: absolute;
        right: 50px;
        bottom: 30%;
        & > .like-section {
          margin-left: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          & > .count {
            font-size: 14px;
            margin-right: 3px;
          }

          & > .shorts-icon.blue {
            color: #4287f5;
          }
        }

        & > .shorts-icon.blue {
          color: #4287f5;
        }
        & > .shorts-icon {
          margin-left: 8px;
        }

        & > .shorts-icon:last-of-type {
          font-size: 23px;
        }

        & > .music-container {
          background-color: black;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;

          & > .music-icon {
            animation: spinner 2s linear infinite;
            font-size: 20px;
          }
        }
      }
      & > .videos {
        width: 500px;
        height: 500px;
        margin: 0 auto;
      }
    }
  }
  video {
    object-fit: cover;
  }
`;

export default Wrapper;
