import styled from "styled-components";

const Wrapper = styled.aside`
  .bookmark-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-right: 2%;
    gap: 2%;
    overflow-y: scroll;
    height: 90vh;
    background-color: var(--post-card-color);
  }

  .linear-gradient {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    /* background-color: black;
    opacity: 0.5;
    backdrop-filter: blur(120px); */
  }

  .linear-gradient:hover {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    backdrop-filter: blur(120px);
  }
  .linear-gradient:hover + .collection-name {
    animation: uphover 5s ease-out forwards;
  }

  .bookmark-container {

    & > .bookmark-body {
      padding: 4%;
      aspect-ratio: 1/1;
      display: grid;
      background-color: var(--post-card-color);

      position: relative;
      grid-template-columns: repeat(1, 1fr);

      align-items: stretch;

      row-gap: 0;
      font-size: 0;
    }
    & > .bookmark-body:first-child {
      padding: 4%;
      aspect-ratio: 1/1;
      display: grid;
      background-color: var(--post-card-color);

      position: relative;

      grid-template-columns: repeat(2, 1fr);

      align-items: stretch;

      row-gap: 0;
      font-size: 0;

      & > .collection-name {
        position: absolute;
        bottom: 10px;
        left: 45%;
        z-index: 2;
        font-weight: bolder;
        text-transform: uppercase;
        row-gap: 0;
        font-size: 25px;
      }
    }
  }
  .bookmark-body0 {
    background-color: var(--post-card-color);

    padding: 4%;
    aspect-ratio: 1/1;
    display: grid;

    position: relative;
    grid-template-columns: repeat(1, 1fr);

    align-items: stretch;

    row-gap: 0;
    font-size: 0;
    & > .lienarbackground {
      background-color: var(--post-card-color);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }

    & > .collection-name {
      position: absolute;
      bottom: 10px;
      left: 45%;
      z-index: 2;
      font-weight: bolder;
      text-transform: uppercase;
      row-gap: 0;
      font-size: 25px;
    }
  }

  @keyframes uphover {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-150px);
    }
  }
`;
export default Wrapper;
