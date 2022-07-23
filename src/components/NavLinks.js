import { NavLink } from "react-router-dom";
import links from "../utils/links";
import Wrapper from "../assets/wrappers/Navlinks";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import {Loading} from "../components"
import { useEffect,useState } from "react";

const NavLinks = ({ toggleSidebar }) => {
  const { user,profilePicture,username,name } = useAppContext();
 

  return (
    <Wrapper>
      <Link to={`/profile/${user._id}`} className="profile">
        <div>
          <img src={profilePicture} alt="" className="profile-photo" />
        </div>
        <div className="handle">
          <h4>{name}</h4>
          <p className="text-muted">@{username}</p>
        </div>
      </Link>

      <div className="sidebar">
        {links.map((link) => {
          const { text, path, id, icon } = link;

          if(id ===4 ){
             return (
            <NavLink
              to={`/profile/${user._id}`}
              key={id}
              onClick={toggleSidebar}
              
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
              
            >
              <span className="icon">{icon}</span>
              <h3>{text}</h3>
            </NavLink>
          );

          }

          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
              
            >
              <span className="icon">{icon}</span>
              <h3>{text}</h3>
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default NavLinks;
