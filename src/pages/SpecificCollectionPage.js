import React ,{useEffect} from 'react'
import { useAppContext } from '../context/appContext'
import { useParams,useNavigate } from 'react-router-dom'
import Wrapper from "../assets/wrappers/collection/SpecificCollection"
import { FaImages } from "react-icons/fa";

const SpecificCollectionPage = () => {
    const{id} = useParams()
    const navigate = useNavigate()

    const goToDetail = (value)=>{
        navigate(`/user/detailpost/${value}`);
    }

    const { specificCollection, specificBookmark, buttonType } =
      useAppContext();

    useEffect(()=>{
        specificBookmark(id)

    },[])
    if(buttonType){
        return <div></div>
    }
  return (
    <Wrapper>

    <div className='collection-box'>
      {specificCollection.map((item, index) => {
        return (
          <div
            key={item._id}
            className="collection"
          >
            {item.postId.map((item, index) => {
              return (
                <div className="card" onClick={() => goToDetail(item._id)}>
                  <img src={item.images[0]} alt="" />
                  {item.images.length > 0 ? (
                    <FaImages className="multiple-image" />
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    </Wrapper>
  );
}

export default SpecificCollectionPage