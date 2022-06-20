import { useAppContext } from "../context/appContext";
const FollowAction = () =>{
    const {
      user,

      followUser,
      buttontype,
      unfollowUser,
    } = useAppContext();
    return (
      <button
        className="btn btn-follow follow-btn"
        disabled={buttontype}
        
      >
        unfollow
      </button>
    );
}