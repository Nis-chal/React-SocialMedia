import { PostCard, AddPostForm } from "../../components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";

const PostPage = () => {
  const { getallPosts, userfeed, createPost } = useAppContext();

  useEffect(() => {
    getallPosts();
  }, []);

  console.log(userfeed);

  return (
    <div className="middle">
      <AddPostForm />
      <div className="feeds">
        {userfeed.map((item, index) => {
          return <PostCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PostPage;
