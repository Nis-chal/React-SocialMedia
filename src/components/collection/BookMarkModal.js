import React from 'react'
import Wrapper from '../../assets/wrappers/collection/BookModal'
import {ImCross} from 'react-icons/im'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import {useState} from 'react';

const BookMarkModal = ({image,postId,userId,isModal,toggleModal}) => {

    const [success,setsuccess] = useState(false)

    
  return (
    <Wrapper>

    <div className={isModal?'Modal-Content':'display-none'}>
        <div className="Modal-Content-Body">
            <ImCross className='cross-symbol'/>
            <div className='heading'>
                <p>New Collection</p>
            </div>
            <img src={image} alt="" />
            <input placeholder='Enter Collection Name' type="text" name="" id="" className='modalinput' />
            <button className='save-btn'>Save Post</button>
        </div>
      
    </div>
    </Wrapper>
  )
}

export default BookMarkModal
