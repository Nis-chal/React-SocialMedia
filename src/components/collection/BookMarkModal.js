import React from 'react'
import Wrapper from '../../assets/wrappers/collection/BookModal'
import {ImCross} from 'react-icons/im'
import {useState} from 'react';
import { useAppContext } from '../../context/appContext';
import {Loading} from '../../components'

const BookMarkModal = ({image,postId,userId,isModal,toggleModal}) => {
    
    const {createCollection,buttontype} = useAppContext()
    const [success,setsuccess] = useState(false)
    const [name,setName] = useState('')

    const submit =()=>{
        createCollection({postId,usercollection:userId,name})
       toggleModal()
    }

  const handleChange = (e) =>{
    setName(e.target.value)
    
  }
  return (
    <Wrapper>

    <div className={isModal?'Modal-Content':'display-none'}>
        <div className="Modal-Content-Body">
            <ImCross className='cross-symbol' onClick ={toggleModal}/>
            <div className='heading'>
                <p>New Collection</p>
            </div>
            <img src={image} alt="" />
            <input placeholder='Enter Collection Name' onChange={handleChange} type="text" name="" id="" className='modalinput' />
            <button className='save-btn' onClick={submit} disabled={buttontype}> Save Post</button>
        </div>
      
    </div>
    </Wrapper>
  )
}

export default BookMarkModal
