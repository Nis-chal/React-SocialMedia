import { FormRow } from "../components";
import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/editForm";
import { useAppContext } from '../context/appContext'
import React from "react"
import { useNavigate } from "react-router-dom";
import {Alert} from "../components"


const UserForm = ( ({ info,reload}) => {
  const navigate = useNavigate()
  
  const {profileUpdate,user,isLoading} = useAppContext()

  const initialState = {
    profileId:user._id,
    name: info.name,
    username: info.username,
    email: info.email,
    profilePicture: info.profilePicture,

    location: info.location,
    coverPage: info.coverPage,

  };
 
  

  const picState = {
    profilePicture: info.profilePicture,
    coverPage: info.coverpage,
  };
  const [values, setValues] = useState(initialState);
  const [pic, setpic] = useState(picState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // formData.append([e.target.name],e.target.value)
  };

  const onSubmit = (e) =>{
     const { name , username,email,location,profileId,profilePicture,coverPage} = values
     

     const content = {name,username,email,location,profilePicture,coverPage,profileId}

     profileUpdate({content})
     reload()

     



  }


  function FileChange (e) {
    var image =  e.target.files[0];

    setValues({ ...values, [e.target.name]: image });

    if(e.target.files && e.target.files[0]){
      let reader = new FileReader()

      reader.onload = function(){
        
        setpic({...pic,[e.target.name]:reader.result})
      }
      reader.readAsDataURL(e.target.files[0])
    }



  };

  if(isLoading){
    return <div></div>
  }
  return (
    <Wrapper>
      <Alert/>
      <div className="edit_userform">
        <FormRow
          type="text"
          handleChange={handleChange}
          name="name"
          value={values.name}
        />
        <FormRow
          type="text"
          handleChange={handleChange}
          name="username"
          value={values.username}
        />
        <FormRow
          type="text"
          handleChange={handleChange}
          name="email"
          value={values.email}
        />
        <FormRow
          type="text"
          handleChange={handleChange}
          name="location"
          value={values.location}
        />
        <label htmlFor="">ProfilePicture</label>
        <div className="file-upload_container">
          <div className="file-content">
            <input type="file" className="form-file" name="profilePicture" onChange={FileChange} />
            <span className="choose-image">Choose Image</span>
          </div>
          <img alt="" className="" src={pic.profilePicture} />
        </div>
        <label htmlFor="">CoverPicture</label>

        <div className="file-upload_container">
          <div className="file-content">
            <input type="file" className="form-file" name="coverPage" onChange={FileChange} />
            <span className="choose-image">Choose Image</span>
          </div>
          <img alt="" className="" src={pic.coverPage} />
        </div>
        <button className="btn btn-primary" onClick={onSubmit}>submit</button>
      </div>
    </Wrapper>
  );
});

export default UserForm;
