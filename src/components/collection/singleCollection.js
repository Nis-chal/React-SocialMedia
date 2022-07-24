import React from 'react'
import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'

const SingleCollection = ({item,closeOption,postId,collection,isBookmark,notBookmark}) => {
  const {updateCollection} = useAppContext()

     const clickCollection = (e)=>{
        e.preventDefault()
    updateCollection({name:item.name,postId})
    closeOption()

  }

  const bookmarked = ()=>{
    isBookmark()
  }

  useEffect(()=>{
    isBookmark()
    // collection.map((item,index)=>
    // {
    //   return item[index].postId.map((post,index)=>{
    //     if(postId === item._id ){
    //       return isBookmark()
    //     }
    //     return notBookmark()
    //   })
    // }
    // )
    isBookmark()
  },[])
  return (
    <div  className="single-item" onClick={clickCollection}>
              <img src={item.postId[0].images[0]} alt="" />
              <h6>{item.name}</h6>
            </div>
  )
}

export default SingleCollection