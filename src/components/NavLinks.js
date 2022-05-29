import { NavLink } from "react-router-dom";
import links from "../utils/links";
import Wrapper from "../assets/wrappers/Navlinks";
import { Link } from "react-router-dom";
import irene from "../assets/images/irene.jpg";
import { useAppContext } from "../context/appContext";

const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext();
  
  return (
    <Wrapper>
      <Link to="/" className="profile">
        <div className="profile-photo">
          <img src={irene} alt="" />
        </div>
        <div className="handle">
          <h4>{user.name}</h4>
          <p className="text-muted">@{user?.username}</p>
        </div>
      </Link>

      <div className="sidebar">
        {links.map((link) => {
          const { text, path, id, icon } = link;

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
