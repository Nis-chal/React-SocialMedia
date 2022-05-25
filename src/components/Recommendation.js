const Recommend = () => {
  return (
    <div className="right">
      <div className="friend-request">
        <h4>Requests</h4>
        <div class="request">
          <div class="info">
            <div class="profile-photo">
              <img src="./images/profile-14.jpg" alt="" />
            </div>

            <div>
              <h5>Hajia Bintu</h5>
              <p class="text-muted">8 mutual friends</p>
            </div>
          </div>

          <div class="action">
            <button class="btn btn-primary">Accept</button>
            <button class="btn ">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};
