import React from "react";
import { useEffect } from "react";
// import Title from 'react-vanilla-tilt'
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/collection/collectionlst";
import {useNavigate} from 'react-router-dom'
import {Loading} from '../components'

const BookmarkPage = () => {
  const {  allCollection, collection, isLoading } = useAppContext();
  const navigate = useNavigate()
  const goToCollection = (collectionId)=>{
    navigate(`/profile/collection/${collectionId}`)

  }

  useEffect(() => {
    //    axios
    // .get(`/api/v1/collection`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    // .then((res) => {
    //   setloading(false)
    //   setbookmarks(res.data.success)});

    allCollection();
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <Wrapper>
      <div className="bookmark-area">
          <div className="bookmark-container">
            {collection.slice(0, 1).map((item, index) => {
              return (
                <div
                  className="bookmark-body"
                
                  key={item._id}
                  onClick={()=>goToCollection(item._id)}
                >
                  <div className="linear-gradient"></div>

                  <p className="collection-name">{item.name}</p>
                  {item.postId.slice(0, 4).map((item, index) => {
                    return <img src={item.images[0]} alt="" key={item._id} />;
                  })}
                </div>
              );
            })}
          </div>
        
            {collection.slice(1, collection.length).map((item, index) => {
              return (
                <div
                  className="bookmark-body0"
               
                  key={item._id}
                  onClick={()=>goToCollection(item._id)}
                >
                  <div className="linear-gradient"></div>

                  <p className="collection-name">{item.name}</p>
                  {item.postId.slice(0, 1).map((item, index) => {
                    return <img src={item.images[0]} alt="" key={item._id} />;
                  })}
                </div>
              );
            })}
    
      </div>
    </Wrapper>
  );
};

export default BookmarkPage;
