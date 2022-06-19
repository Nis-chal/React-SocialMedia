import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/searchList";
import {Link} from "react-router-dom"

const SearchResult = () => {
  const { searchList } = useAppContext();
  return (
    <Wrapper>
      <div className="search_result">
        {searchList.map((item, index) => {
          return (
            <Link to={`/profile/${item._id}`}key={index} >
              <div className="search-content" key={index}>
                <img
                  src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg"
                  alt=""
                  className="profile-photo"
                />
                <div className="search-info">
                  <div className="search-username">{item.username}</div>
                  <div className="search-name">{item.name}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SearchResult;
