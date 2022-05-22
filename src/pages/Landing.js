import Wrapper from "../assets/wrappers/Landing";
import Video from "../assets/videos/NeonBg.mp4";




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

    </Wrapper>
    );
};

export default Landing;
