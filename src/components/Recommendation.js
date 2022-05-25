import Wrapper from "../assets/wrappers/Recommend";
import irene from "../assets/images/irene.jpg";

const Recommendation = () => {
  return (
    <Wrapper>
      <div className="right">
        <div className="may-know">
          <h4>Recommendation</h4>
          <div class="request">
            <div class="info">
              <div class="profile-photo">
                <img src={irene} alt="" />
              </div>

              <div>
                <h5>Hajia Bintu</h5>
                <p class="text-muted">8 mutual friends</p>
              </div>
            </div>

            <div class="action">
              <button class="btn2 btn2-primary">Follow</button>
              <button class="btn2 ">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recommendation;
