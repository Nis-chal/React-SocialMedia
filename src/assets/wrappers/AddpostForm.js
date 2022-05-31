import styled from "styled-components";

const Wrapper = styled.aside`
  form {
    background: var(--color-white);
  }
  .create-post {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    background: var(--color-white);
    padding: 0.4rem var(--card-padding);
    border-radius: var(--border-radius);
  }

  .create-post input[type="text"] {
    justify-self: start;
    width: 100%;
    padding-left: 1rem;
    background: transparent;
    color: var(--color-dark);
    margin-right: 1rem;
    outline: none;
    border: none;
  }

  .location-input {
    justify-self: start;
    width: 100%;
    padding-left: 1rem;
    background: var(--color-secondary);
    color: var(--color-dark);

    margin-right: 1rem;
    outline: none;
    border: none;
    height: 40px;
  }

  .icons {
    color: var(--color-primary);
    font-size: 2rem;
    margin-right: 0.9rem;
    cursor: pointer;
  }

  .icons-image {
    font-size: 1.1rem;
    color: var(--color-primary);
  }

  .display-none {
    display: none;
  }
  .upload-image {
    width: 30px;
    overflow: hidden;
    padding-top: 7px;
  }
  label[for="upload"] {
    position: relative;

    cursor: pointer;
    overflow: hidden !important;
    font-size: 1rem;

    width: 9px;

    & > input {
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
      opacity: 0;
    }
  }

  .multiple-images {
    display: flex;
    margin-top: 10px;

    & > .image {
      position: relative;

      /* overflow: hidden; */

      margin-left: 10px;

      & > img {
        width: 100px;
        aspect-ratio: 1/1;
      }

      & > .image-cross {
        color: yellow;
        position: absolute;
        top: -7px;
        right: -5px;
      }
    }
  }
`;

export default Wrapper;