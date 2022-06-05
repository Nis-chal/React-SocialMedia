import { ImagePreview, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Postedit = () => {
  const { id: postid } = useParams();

  const { detailspost, postInfo } = useAppContext();

  useEffect(() => {
    detailspost(postid);
  }, [postid]);

  return (
    <div className="editfrom">
      <Alert />
      <ImagePreview postInfo={postInfo} />
    </div>
  );
};
export default Postedit;
