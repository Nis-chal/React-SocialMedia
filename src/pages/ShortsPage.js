import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/shorts/shortspage";
import Singleshorts from "../components/shorts/Singleshorts";

const ShortsPage = () => {
  const { token } = useAppContext();
  const [lstshorts, setShorts] = useState([]);


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
  }, [token]);
  return (
    <Wrapper>
      <div className="video-container">
        {lstshorts.map((item, index) => {
          return (

            
            
              <Singleshorts item ={item} key={item._id}/>
          
       
          );
        })}

     
      </div>
    </Wrapper>
  );
};

export default ShortsPage;
