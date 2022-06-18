import styled from "styled-components";

const Wrapper = styled.aside`
  .profile {
    background-color: var(--post-card-color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 20px;
  }

  .profile-content {
    display: flex;
    flex-direction: column;
  }

  .profile-images {
    position: relative;
    & > .profile-photo {
      width: 80px;
      aspect-ratio: 1/1;
      border-radius: 50px;
      position: absolute;
      left: 30px;
      bottom: -10px;
    }
    & > .profile-username {
      position: absolute;
      left: 15%;
      bottom: 14%;
      font-weight: bolder;
      font-size: 22px;
    }
    & > .profile-cover {
      aspect-ratio: 1/0.2;
    }
  }

  .profile-info {
    width: 100%;

    & > .profile-info-content {
      width: 100%;
      align-items: center;
      padding-block: 20px;
      display: flex;
      justify-content: center;
      gap: 5%;
      padding-inline: 15%;
      background-color: var(--post-card-color);
    }
  }

  .pff-count {
    display: grid;
    grid-template-columns: repeat(3, 1Fr);
  }

  .profile-container {
    display: grid;
    grid-template-columns: 18vw auto;
    gap: 5%;
    margin-left: 2%;

    & > .profile-left {
      & > .profile-intro {
        margin-bottom: 20px;
        background-color: var(--post-card-color);
        padding-left: 5%;
        padding-block: 4%;
        height: max-content;

        border-radius: 10px;
        color: var(--color-link);

        & > .intro-header {
          display: flex;
          align-items: center;

          gap: 10px;
          margin-bottom: 10px;
          color: var(--color-secondary);
        }
      }
    }

    .photo-section {
      background-color: var(--post-card-color);
      padding: 3%;
      border-radius: 15px;
      color: var(--color-secondary);

      .profile-collection {
        margin-top: 10px;
        background-color: var(--post-card-color);
        padding: 2%;
        display: grid;
        grid-template-columns: repeat(3, 1Fr);
        gap: 2%;

        & > img {
          aspect-ratio: 1/1;
        }
      }
    }
  }

  .profile-posts {
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(3, 1Fr);
    background-color: var(--post-card-color);
    padding: 2%;
    & > img {
      aspect-ratio: 1/1;
    }
  }

  .tab {
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding-inline: 3%;
    padding-bottom: 1%;
    color: white;
    font-weight: 500;
    color: var(--card-color);

    &.active {
      border-bottom: 2px solid var(--color-primary);
    }
  }
`;

export default Wrapper;
