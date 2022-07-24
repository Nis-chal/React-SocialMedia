import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {IoMdAddCircle} from 'react-icons/io'
import Wrapper from '../../assets/wrappers/collection/choosecollection'

import { useAppContext } from '../../context/appContext'
const ChooseCollection = (({postId,display,usercollection,hovering,hoverleave}) => {

  const {collection,getCollection,buttontype} = useAppContext()

  const [loading,isLoading] = useState(true)
 

  const clickCollection = ()=>{
    
  }
useEffect(()=>{
  getCollection()
  // isLoading(false)
},[])
 
 if(buttontype){
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

            return <div key={item._id} className="single-item">
              <img src={item.postId[0].images[0]} alt="" />
              <h6>{item.name}</h6>
            </div>

          })}

        </div>

    </div>
    </Wrapper>
  )
})

export default ChooseCollection
