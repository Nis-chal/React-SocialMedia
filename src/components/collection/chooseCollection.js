import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {IoMdAddCircle} from 'react-icons/io'
import Wrapper from '../../assets/wrappers/collection/choosecollection'
import {SingleCollection} from '../../components/collection'
import { useAppContext } from '../../context/appContext'
const ChooseCollection = (({postId,display,usercollection,hovering,hoverleave,isBookmark,notBookmark}) => {

  const {collection,getCollection,buttontype,createcollection} = useAppContext()

  const [loading,isLoading] = useState(true)
 

 
useEffect(()=>{
  console.log('getcollection')
  isLoading(false)
  
},[])
 
 if(loading){
  return <div>
   
  </div>
 }

  return (
    <Wrapper>

    <div className={display?'collection-content':'display-none'} onMouseEnter={hovering} onMouseLeave={hoverleave}>
        <div className='collection-heading'>
            <IoMdAddCircle className='add-collection-btn'/>
                  <h4>Create Collection</h4>
        </div>
        <hr className='underline'/>
        <div className='collection-list'>

          {collection.map((item,index)=>{

            return (

              <SingleCollection key={item._id} item={item} closeOption={hoverleave} postId={postId} collection = {collection} isBookmark={isBookmark} notBookmark={notBookmark}/>
            )
          

          })}

        </div>

    </div>
    </Wrapper>
  )
})

export default ChooseCollection
