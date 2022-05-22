import styled from "styled-components";
import bg from "../images/neon-ball.png";


const wrapper = styled.aside`

     .one {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130vh;
    /* min-height: 100vh; */
    width: 100%;
    overflow: hidden;

    background-image: url(${bg});
    background-size: cover;
    background-position: center;
  }

  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;

    animation: fadeOut 5s cubic-bezier(0, 0.33, 0.07, 1.03) 2.2s forwards;
  }

  .video-bg-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.17);
  }
  .linear-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      135deg,
      rgba(1, 3, 5, 0.2) 0%,
      rgb(9, 3, 15, 0.2) 100%
    );
    animation: fadeOut 5s cubic-bezier(0, 0.33, 0.07, 1.03) 1.9s forwards;
  }
  nav {
    position: absolute;
    top: 0;
    display: flex;
    padding-top: 20px;

    align-items: center;
    opacity: 0;

    gap: 20px;
    z-index: 5;

    animation: fadeEaseIn 3s cubic-bezier(0, 0.33, 0.07, 1.03) 0s forwards;
  }

  .navbar-link {
    display: flex;
    align-items: center;
    gap: 90px;
    font-weight: bold;
  }
  .d-flex {
    display: flex;
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-weight: lighter;
  }
  .circle-border {
    width: 53px;
    height: 53px;
    text-align: center;
    display: flex;
    box-shadow: 0px 0px 21px rgb(255 255 255 / 26%);

    justify-content: center;
    align-items: center;
    font-weight: 900;
    margin: 0 auto;

    border-radius: 50px;
    border: 1.7px solid white;
  }
  .XL-text {
    position: absolute;
    text-transform: uppercase;
    opacity: 0;

    text-align: center;
    color: #ffffff;
    /* transform: translateY(-50px); */
    font-family: "MADE Soulmaze Outline Regular";
    font-size: min(10vw, 85px);

    line-height: min(10vw, 81px);
    text-shadow: 0px 0px 21px rgb(255 255 255 / 65%);
    z-index: 1;
    animation: fadeIn 2s ease-in 0s forwards;
  }
  .L-text {
    position: absolute;
    font-family: "MADE Soulmaze Outline Regular";

    text-transform: uppercase;
    text-align: center;

    font-size: min(10vw, 85px);

    line-height: min(10vw, 81px);

    color: transparent;
    -webkit-text-stroke: 0.3px rgba(255, 255, 255, 0.497);

    transform: translateY(-25px);
  }
  .fab {
    font-size: 24px;
    font-weight: lighter;
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    z-index: 2;
  }
  .M-text {
    transform: rotate(90deg);
    transform-origin: 0 0;
    font-size: 0.7rem;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .container-center {
    width: 80vw;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }
  .GetStarted {
    background-color: #e93dd600;
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    border-color: #ffffff;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 32px 32px 5px rgb(4 4 4 / 42%);
    padding: 12px 75px 12px 75px;
    position: absolute;
    margin-top: 190px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
  }
  .GetStarted:hover {
    background-image: linear-gradient(
      135deg,
      rgba(6, 147, 227, 0.2) 0%,
      rgb(155, 81, 224, 0.2) 100%
    );
    background-color: transparent;
    text-transform: uppercase;
  }
  .text-M {
    position: absolute;
    margin-top: 90px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #ab89c7;
    letter-spacing: 4px;
    font-family: "Kanit", sans-serif;
  }

  .featured {
    position: absolute;
    bottom: 90px;
    font-family: "MADE Soulmaze Outline Regular";

    left: 10vw;
    font-size: 2rem;

    text-transform: uppercase;
    animation: fadeIn 2s ease-in 0s forwards;
  }
  .featured::after {
    content: "Featured";
    font-family: inherit;

    position: absolute;
    bottom: -25px;
    left: 0;
    font-size: 2rem;
    color: transparent;
    -webkit-text-stroke: 0.3px rgba(255, 255, 255, 0.497);

    text-transform: uppercase;
  }

  .two {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: black;
    padding: 9%;
    padding-top: 2%;
    column-gap: 2%;
    row-gap: 2%;
  }

  .two > img {
    max-height: 172px;
  }

  .three {
    background-color: black;
    padding-right: 4%;
    display: flex;
    align-items: center;
    justify-content: end;

    & > span {
      position: absolute;
      margin-right: clamp(10px, 10%, 47px);
      text-transform: uppercase;
      font-weight: lighter;
      font-family: "MADE Soulmaze Outline Regular";
    }
    & > svg {
      margin-left: auto;
      display: block;

      height: 150px;
      letter-spacing: 0.52em;

      & > text {
        transform-origin: 50% 50%;
        animation: rotate 10s linear infinite;
      }
    }
  }

  @keyframes rotate {
      from {
        transform: rotate(0);
      }

      to {
        transform: rotate(-360deg);
      }
    }

    .four {
    background-color: blue;

    background-color: black;
    padding-inline: 10%;

    & > .Patners {
      padding-top: 10px;
      font-family: "MADE Soulmaze Outline Regular";
      font-size: 2rem;
      position: relative;
      bottom: -10px;

      &::after {
        content: "patners with";
        font-family: inherit;

        position: relative;
        bottom: -25px;
        left: 0;
        font-size: 2rem;
        color: transparent;
        -webkit-text-stroke: 0.3px rgba(255, 255, 255, 0.497);

        text-transform: uppercase;
      }

      &::before {
        content: "patners with";
        font-family: inherit;
        color: #d2d4f2;

        position: absolute;
        bottom: -15px;
        left: 0;
        font-size: 2rem;

        text-transform: uppercase;
      }
    }

    .line-left {
      background-color: white;
      height: 1px;
      width: 100%;
      margin-top: 40px;
    }
    .line-right {
      background-color: white;
      height: 1px;
      width: 100%;
      margin-bottom: 10px;
    }

    .getstarted-btn {
      margin-top: 20px;
      white-space: nowrap;
      justify-content: center;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      word-wrap: normal;
      font-weight: bolder;

      align-items: center;

    

      width: clamp(90px, 50%, 270px);
      text-transform: uppercase;
      color: white;
      background-color: transparent;

      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #00d8ff;
      border-radius: 5px 5px 5px 5px;
      box-shadow: 0px 32px 32px 5px rgb(4 4 4 / 42%);
      padding: 12px 87px 12px 87px;
    }

    .million {
      color: #00d8ff;
    }

    .brands {
      background-color: black;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
    }
  }

  .five {
    background-color: black;
    padding-inline: 10%;
    padding-top: 5%;
    /* background-color: #ab89c7; */
    height: max-content;
    overflow: hidden;

    & > .five-p {
      font-size: clamp(0.4rem , calc(0.4rem + 2vw), 21px);
      line-height: clamp(1.5rem,calc(1.5rem + 1vw),40px);
      font-style: inherit;
      padding-right: 5%;
      padding-top: 30px;
    }

    & > .bigimg-left {
      width: 70%;
      max-height: 470px;
      margin-block: 30px;
    }
    & > .bigimg-right {
      width: 70%;
      max-height: 470px;
      text-align: end;
      float: right;
    }

    & > .five-content {
      display: flex;
      align-items: center;

      gap: 10px;

      .circle-b {
        min-width: 53px;
        min-height: 53px;

        display: flex;
        box-shadow: 0px 0px 21px rgb(255 255 255 / 26%);

        justify-content: center;
        align-items: center;
        font-weight: 900;

        border-radius: 50px;
        border: 1.7px solid white;
      }

      & > .Why {
        font-family: "MADE Soulmaze Outline Regular";
        font-size: clamp(1.5rem,calc(0.3rem + 2vw),2rem);
        position: relative;
        top: -20px;
        color: wheat;
        
      }

      &>.Why::before {
        content: "Why choose winkle";
        font-size: inherit !important;
        white-space: nowrap;
        width: 100%;
        font-family: inherit;
        color: #d2d4f2;
        word-break: keep-all;

        position: absolute;
        bottom: -15px;
        left: 0;
        font-size: 2rem;

        text-transform: uppercase;
      }

      &>.Why::after {
        content: "Why choose winkle";
        font-size: inherit !important;
        white-space: nowrap;

        position: relative;
        bottom: -25px;
        left: 0;
        font-size: 2rem;
        color: transparent;
        -webkit-text-stroke: 0.3px rgba(255, 255, 255, 0.497);

        text-transform: uppercase;
      }
    }
  }

    @media screen and (max-width: 700px) {
      .two {
        grid-template-columns: repeat(2, 1fr);
      }
      .two > img {
        max-height: 104px;
      }
    }



`;

export default wrapper;