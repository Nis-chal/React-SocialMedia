
import React from 'react'
import Error0 from '../assets/videos/Error0'

const ErrorPage = () => {
  return (
    <div>
      <video className="error0" autoPlay muted>
          <source type="video/mp4" src={Error0} />
        </video>
    </div>
  )
}

export default ErrorPage
