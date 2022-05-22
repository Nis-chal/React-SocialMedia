import Wrapper from "../assets/wrappers/Landing";
import Video from "../assets/videos/NeonBg.mp4";

import miles from "../assets/images/miles.jpg"
import wolverine from "../assets/images/wolverine0.jpg"
import ironfist from "../assets/images/ironfist.jpg"
import scarlet from "../assets/images/scarlet.jpg"
import hulk from "../assets/images/hulk.jpg"
import deadpool from "../assets/images/deadpool.png"
import venom from "../assets/images/venom.jpg"
import thor from "../assets/images/thor.jpg"


import cocacola from "../assets/images/cocacola.webp"
import ikea from "../assets/images/ikea.webp"
import samsung from "../assets/images/samsung.webp"
import fourf from "../assets/images/4f.webp"




import { SiInstagram, SiBehance } from "react-icons/si";
import { FaLinkedinIn, FaHeart, FaGrinTongueWink } from "react-icons/fa";


const Landing = () =>{
    return (
    <Wrapper>
        <section className="one">
        <nav>
          <ul className="d-flex navbar-link">
            <li>Get Started</li>
            <li className="logo">
              <span className="circle-border">N</span> <span>NOK'S MEDIA</span>
            </li>
            <li>About</li>
          </ul>
        </nav>
        <video className="video-bg" autoPlay muted>
          <source type="video/mp4" src={Video} />
        </video>
        {/* <video className="video-bg-1" autoPlay loop muted={false}>
          <source type="video/mp4" src={Video} />
        </video> */}
        <div className="linear-background"></div>
        <div className="XL-text">Social Network</div>
        <div className="L-text">Social Network</div>

        <div className="container-center">
          <div className="M-text">Interactive Design</div>
          
          <div className="social-icons">
            <span>
              <SiInstagram className="fab" />
            </span>
            <span>
              <FaLinkedinIn className="fab" />
            </span>
            <span>
              <SiBehance className="fab" />
            </span>
          </div>
        </div>

        <div className="text-M">
          <span>
            <FaHeart /> /
            <FaGrinTongueWink /> &nbsp;
          </span>
          = World
        </div>
        <button className="GetStarted">Get Started</button>

        <div className="featured">FEATURED</div>
      </section>


      <section className="two">
        <img src={miles} alt="" />
        <img src={ironfist} alt="" />
        <img src={scarlet} alt="" />
        <img src={wolverine} alt="" />
        <img src={hulk} alt="" />
        <img src={deadpool} alt="" />
        <img src={venom} alt="" />
        <img src={thor} alt="" />
      </section>


      <section className="three">
         <span>login</span>
        <svg viewBox="0 0 150 150">
          <path 
            id="curve" 
            fill="transparent" 
            
            
            d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
          />
          <text>
            <textPath xlinkHref="#curve" fill="#9b51e0" >
                | VIEW | LIKE | POST |
            </textPath>
          </text>
        </svg>
      </section>

      <section className="four">
        <div className="Patners"></div>
        <div className="line-left"></div>

        <div className="brands  ">
          <img src={samsung} alt="" />
          
          <img src={cocacola} alt="" />
          <img src={fourf} alt="" />
          <img src={ikea} alt="" />



        </div>
        <div className="line-right"></div>

        <span className="million">*Along with 1 million users</span>

        <button  className="getstarted-btn" >get started</button>

      </section>

    </Wrapper>
    );
};

export default Landing;
