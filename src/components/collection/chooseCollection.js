import React from 'react'
import {IoMdAddCircle} from 'react-icons/io'
import Wrapper from '../../assets/wrappers/collection/choosecollection'
const ChooseCollection = ({postId,display}) => {
  return (
    <Wrapper>

    <div className={display?'collection-content':'display-none'}>
        <div className='collection-heading'>
            <IoMdAddCircle className='add-collection-btn'/>
                  <h4>Create Collection</h4>
        </div>
        <hr className='underline'/>
        <div className='collection-list'>

        </div>

    </div>
    </Wrapper>
  )
}

export default ChooseCollection
