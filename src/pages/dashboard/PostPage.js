import { PostCard, AddPostForm } from "../../components";
const PostPage = () => {
  return (
    <div className="middle">
      <AddPostForm />
      <div className="feeds">
        <PostCard />
      </div>
    </div>
  );
};

export default PostPage;
