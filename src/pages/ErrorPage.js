
import React from 'react'
import Error0 from '../assets/videos/error0.mp4'
import {useNavigate} from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage'
import {MdOutlineSearchOff} from 'react-icons/md'

const ErrorPage = () => {

  const navigate = useNavigate();

  return (
    <Wrapper>


    <div className='error-proccess'>
      <video className="error-start" autoPlay muted>
          <source type="video/mp4" src={Error0} />
        </video>

        <div className="error-msg">
          <MdOutlineSearchOff className='searchicon'/>
          <h1>404</h1>
          <p>Page Not Found !</p>
          <h2 onClick={()=>navigate(-1)}>Go back</h2>
        </div>

        <h1 className='heading'>Searching ....</h1>

     

    </div>
    </Wrapper>
  )
}

export default ErrorPage
