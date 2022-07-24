import React from 'react'
import { useAppContext } from '../../context/appContext'

const SingleCollection = ({item,closeOption,postId}) => {
  const {updateCollection} = useAppContext()

     const clickCollection = (e)=>{
        e.preventDefault()
    updateCollection({name:item.name,postId})
    closeOption()

  }
  
 


  return (
    <div  className="single-item" onClick={clickCollection}>
              <img src={item.postId[0].images[0]} alt="" />
              <h6>{item.name}</h6>
            </div>
  )
}

export default SingleCollection