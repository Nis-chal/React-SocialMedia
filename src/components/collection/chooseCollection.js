import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {IoMdAddCircle} from 'react-icons/io'
import Wrapper from '../../assets/wrappers/collection/choosecollection'
import {SingleCollection} from '../../components/collection'
import { useAppContext } from '../../context/appContext'
const ChooseCollection = (({postId,display,hovering,hoverleave,toggleModal}) => {

  const {collection} = useAppContext()

  const [loading,isLoading] = useState(true)
 

 
useEffect(()=>{
  console.log('getcollection')
  isLoading(false)
  
},[])

const openModal = ()=>{
  hoverleave()
  toggleModal()
}
 
 if(loading){
  return <div>
   
  </div>
 }

  return (
    <Wrapper>

    <div className={display?'collection-content':'display-none'} onMouseEnter={hovering} onMouseLeave={hoverleave}>
        <div className='collection-heading'>
            <IoMdAddCircle className='add-collection-btn' onClick={openModal}/>
                  <h4>Create Collection</h4>
        </div>
        <hr className='underline'/>
        <div className='collection-list'>

          {collection.map((item,index)=>{

            return (

              <SingleCollection key={item._id} item={item} closeOption={hoverleave} postId={postId} collection = {collection} />
            )
          

          })}

        </div>

    </div>
    </Wrapper>
  )
})

export default ChooseCollection
