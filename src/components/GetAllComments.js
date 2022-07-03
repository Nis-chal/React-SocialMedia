import Wrapper from "../assets/wrappers/GetAllComments";
import { useAppContext } from "../context/appContext";
import React,{useState,useEffect} from 'react'

import axios from "axios";
import moment from "moment";



const GetAllComments = React.memo(({postId}) => {
  const { token } = useAppContext();

  const [ ListOfComment,setComment]= useState([])

  const listOutComment= ({comment})=>{
    setComment( comment)
  }
  useEffect(()=>{

    axios.get(`/api/v1/comment/get/${postId}`, {headers: {
  Authorization: `Bearer ${token}`,
  }}).then(
      res=>listOutComment({comment:res.data.comment})
    );
  },[postId,token])
 


  


  return (
    <Wrapper>
     
     
      
      {
        
          

          ListOfComment.map((item)=>{
             return (
            <div className="AllCommentSection" key={item._id}>
              <img
                src="https://developer99.com/metronic-admin/theme/assets/admin/pages/media/profile/profile_user.jpg"
                alt=""
                className="profile-photo"
              />
              <div className="comment-info">
                <p className="comment-content">{item.content}</p>
                <p className="comment-time">{moment(item.createdAt).fromNow()}</p>
              </div>
            </div>
          );
  
          })
        
      }
    
    </Wrapper>
  );
});

export default GetAllComments;
