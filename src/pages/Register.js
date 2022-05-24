import {useState} from 'react'

import Wrapper from '../assets/wrappers/RegisterPage'
import {FormRow} from '../components'


import backgroundbg from '../assets/videos/handtouch.mp4'

const initialState ={
 
  name:'',
  email:'',
  profilePicture:undefined,
  password:'',
  isMember:true,
  location:'',
 
  
}

  




   

const Register = () => {
  const [values,setValues] = useState(initialState)

  const toggleMember = () =>{
    setValues({...values, isMember:!values.isMember})
  }
  const handleChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value})
    // formData.append([e.target.name],e.target.value)
    
  }
  
   const FileChange = async (e) =>{
     var image = await e.target.files[0]
     console.log(image)
     setValues({...values,[e.target.name]:image})
    console.log(e.target.file)
  }
 

  
  
  

  return (
    <Wrapper className ='full-name'>
       <form action="" className='form' encType="multipart/form-data; boundary=<calculated when request is sent>" >
      

       <div className="title">Winkle</div>
      <h3 className='login-t'>{values.isMember ? ' Log in' :' Register'}</h3>
      <p className='login-p'>Enter your credentials to {values.isMember ? 'acesss' :' create'} your account</p>
      {!values.isMember && 
        (<FormRow 
        type='text' 
        name="name" 
       
       
        />
        

        )}
         <FormRow type='email' name="email" value={values.email} />

        {!values.isMember && 
        (<FormRow 
        type='file' 
        name="profilePicture" 
        handleChange ={FileChange}

       

        
        />
        

        )}
         {!values.isMember && 
        (<FormRow 
        type='text' 
        name="location"
        value={values.location} 
         handleChange ={handleChange}
      
        
        />
        )}
         
        <FormRow type='password' name="password" value={values.password} handleChange ={handleChange}/>

        <button type='submit' className='btn btn-block btn-getstarted'  >Submit</button>
        <p>
            {values.isMember?'Not a member yet ?':'Already a member ? '}
            <button type='button' onClick= {toggleMember} className="member-btn" > {values.isMember ? ' Register' :' Log in'}</button>

        </p>

     </form>
       <div className='sidebg'>
         <video className="bg-video" autoPlay muted>
            <source type="video/mp4" src={backgroundbg} />
          </video>
          <div className="bglinear"></div>
       </div>

    
      </Wrapper>
  )
}

export default Register