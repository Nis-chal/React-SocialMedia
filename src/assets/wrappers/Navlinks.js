import styled from "styled-components";

const Wrapper = styled.aside`
  .profile {
    padding: var(--card-padding);
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;

    & > .profile-photo > img {
      object-fit: cover;
    }
  }

  .sidebar {
    margin-top: 1rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
  }

  .sidebar .menu-item {
    display: flex;
    align-items: center;
    height: 4rem;
    cursor: pointer;
    transition: all 300ms ease;
    position: relative;
  }

  .sidebar .menu-item:hover {
    background: var(--color-light);
  }

  .sidebar span {
    font-size: 1.4rem;
    color: var(--color-gray);
    margin-left: 2rem;
    position: relative;
  }

  .sidebar h3 {
    margin-left: 1.5rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 1200px) {
    .profile {
      display: none;
    }

    .sidebar h3 {
      display: none;
    }

    .left .btn {
      display: none;
    }
  }
`;
export default Wrapper;
