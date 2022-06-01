import { PostCard } from "../components";

import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

const PostsContainer = () => {
  const { getallPosts, userfeed } = useAppContext();

  useEffect(() => {
    getallPosts();
  }, []);

  return (
    <div className="feeds">
      {userfeed.map((item, index) => {
        return <PostCard item={item} key={index} />;
      })}
    </div>
  );
};

export default PostsContainer;
