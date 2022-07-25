import styled from "styled-components";

const Wrapper = styled.aside`
  .video-container {
    overflow-y: scroll;
    height: 90vh;

    & > .hello {
      background-color: var(--post-card-color);
      display: flex;
      padding-top: 10px;
      flex-direction: column;
      justify-content: center;
      position: relative;

      & > .description{
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
        gap: 30px;
        flex-direction: column;
        position: absolute;
        right: 50px;
        bottom: 30%;

        & > .shorts-icon.blue{
          color:blue;

        }
        & > .shorts-icon {
          margin-left: 8px;

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
