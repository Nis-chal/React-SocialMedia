import { useState } from "react";
import { useAppContext } from "../context/appContext";

const RemoveFollowerbtn = ({ followerId,clicked }) => {
  const [followed, setFollowed] = useState(true);
  const { buttontype, removeFollower } = useAppContext();

  const togglefollow = () => {
    removeFollower(followerId);
    setFollowed(false);
    clicked()
  };

  return (
    <div>
      <button
        className={followed ? "btn btn-follow follow-btn" : "display-none"}
        disabled={buttontype}
        onClick={() => togglefollow()}
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveFollowerbtn;
