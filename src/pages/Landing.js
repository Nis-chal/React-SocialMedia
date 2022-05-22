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


import jurrasic from "../assets/images/dino1.jpg"
import avatar from "../assets/images/avatar0.jpg"




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


      <section className="five">
        <div className="five-content">
          <span className="circle-b">N</span> 
          <div className="Why"></div>

        </div>
          <p className="five-p">
Matt’Studio specialises in creating responsive mobile apps, web & mobile design, data design and much more. Our aim is to make the product as user friendly as possible, so that user anyone can find anything within their finger reach. Yet at the same time we are not forgetting about the stunning visuals which will allows to enjoy the application and please every eye.          
</p>
<p className="five-p">We often help start ups to get their first site live! Don’t be shy send a question!</p>

<p className="five-p">Check out our services.</p>

<img src={jurrasic} className="bigimg-left" alt="" />
<img src={avatar} className="bigimg-right" alt="" />


      </section>

      

    </Wrapper>
    );
};

export default Landing;
