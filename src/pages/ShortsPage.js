import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/shorts/shortspage";
import Singleshorts from "../components/shorts/Singleshorts";
import {Loading} from "../components"
import { useNavigate } from "react-router-dom";


const ShortsPage = () => {
  const { token } = useAppContext();
  const [lstshorts, setShorts] = useState([]);
  const [loading,setLoading] = useState(true)
  const navigate = useNavigate();


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
      .then((res) => {
        setShorts(res.data.shorts)});
        setLoading(false)
  }, [token,lstshorts]);

  if(loading){
    return <Loading/>
  }


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
