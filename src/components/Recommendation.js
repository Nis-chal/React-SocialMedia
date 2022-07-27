import Wrapper from "../assets/wrappers/Recommend";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const Recommendation = () => {
  const { token } = useAppContext();
  const navigate = useNavigate();

  const [recommend, setrecommendation] = useState();
  const [loading, isloading] = useState(true);

  const goToProfile = (profileid) => {
    navigate(`/profile/${profileid}`);
  };

  useEffect(() => {
    axios
      .get(`/api/v1/profile/userrandom`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        isloading(false);
        setrecommendation(res.data.user);
      });
  }, [token]);

  if (loading) {
    return <div></div>;
  }
  return (
    <Wrapper>
      <div className="right">
        <div className="may-know">
          <h4>Recommendation</h4>

          {recommend.map((item, index) => {
            return (
              <div
                className="request"
                key={item._id}
                onClick={() => goToProfile(item._id)}
              >
                <div className="info">
                  <div>
                    <img
                      className="profile-photo"
                      src={item.profilePicture}
                      alt=""
                    />
                  </div>

                  <div>
                    <h5>{item.username}</h5>
                  </div>
                </div>

                {/* <div className="action">
                  <button className="btn2 btn2-primary">Follow</button>
                  <button className="btn2 ">Remove</button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Recommendation;
