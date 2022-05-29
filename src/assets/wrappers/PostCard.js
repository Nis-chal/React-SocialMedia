import styled from "styled-components";

const Wrapper = styled.aside`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

  .feed {
    font-family: "Poppins", sans-serif;

    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    margin: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--color-dark);
  }
  .feed .head {
    display: flex;
    justify-content: space-between;
  }

  .feed .user {
    display: flex;
    gap: 1rem;
  }

  .feed .photo {
    border-radius: var(--card-border-radius);
    overflow: hidden;
    margin: 0.7rem 0;
    display: flex;
    overflow: hidden;
  }
  .feed .action-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    margin: 0.6rem;
  }
  .dot-btns {
    display: flex;
    gap: 2px;
    width: max-content;
    margin-inline: auto;
  }
  .dot-btn {
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
    padding: 1.7px;
    background-color: var(--color-dark);
  }
  .liked-by {
    display: flex;
  }

  .react-icons {
    color: var(--color-dark) !important;
    font-size: 1.2rem;
  }
  .love-icons {
    font-size: 1.5rem;
  }
  .comment-icons {
    font-size: 1.4rem;
    margin-left: 1rem;
  }
  .interaction-buttons {
    display: flex;
    align-items: center;
  }

  .liked-by span {
    width: 1.4rem;
    height: 1.4rem;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--color-white);
    margin-left: -0.6rem;
  }

  .liked-by span:first-child {
    margin: 0;
  }
  .liked-by p {
    margin-left: 0.5rem;
  }
`;

export default Wrapper;
