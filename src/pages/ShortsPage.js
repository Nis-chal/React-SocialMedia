import React, { useState, useEffect ,useRef} from "react";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/shorts/shortspage";
import Singleshorts from "../components/shorts/Singleshorts";

const ShortsPage = () => {
  const { token } = useAppContext();
  const [lstshorts, setShorts] = useState([]);
  const [ispaly, setPlay] = useState(false);
   const vidRef = useRef(null);
 

  const onentry = ()=>{
    setPlay(true)
    vidRef.current.play();
  }

  const onleave = ()=>{
    vidRef.current.pause();
  }

  useEffect(() => {
    axios
      .get(
        "/api/v1/shorts/get",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setShorts(res.data.shorts));
  }, []);
  return (
    <Wrapper>
      <div className="video-container">
        {lstshorts.map((item, index) => {
          return (

            
            
              <Singleshorts item ={item}/>
          
       
          );
        })}

     
      </div>
    </Wrapper>
  );
};

export default ShortsPage;
