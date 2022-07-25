import React from "react";
import { useEffect } from "react";
// import Title from 'react-vanilla-tilt'
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/collection/collectionlst";

const BookmarkPage = () => {
  const { token, allCollection, collection, isLoading } = useAppContext();

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
    return <div>non</div>;
  }

  return (
    <Wrapper>
      <div className="bookmark-area">
          <div className="bookmark-container">
            {collection.slice(0, 1).map((item, index) => {
              return (
                <div
                  className="bookmark-body"
                  data-tilt
                  data-tilt-max="50"
                  data-tilt-speed="400"
                  data-tilt-perspective="500"
                  key={item._id}
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
                  data-tilt
                  data-tilt-max="50"
                  data-tilt-speed="400"
                  data-tilt-perspective="500"
                  key={item._id}
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
