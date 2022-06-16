import styled from "styled-components";

const Wrapper = styled.aside`
  background-color: var(--post-card-color);
  

  .profile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 7px;
  }

  .profile-content {
    display: flex;
  }

  .profile-picture {
    margin-right: 20px;
    & > .profile-photo {
      width: 80px;
      aspect-ratio: 1/1;
      border-radius: 50px;
    }
  }

  .profile-info {
    width: 100%;
    & > .profile-info-content {
      width: 50%;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }

  .pff-count {
    display: grid;
    grid-template-columns: repeat(3, 1Fr);
  }

  .profile-posts {
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(3, 1Fr);
    & > img {
      aspect-ratio: 1/1;
    }
  }
`;

export default Wrapper;
