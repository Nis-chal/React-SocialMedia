import irene from "../assets/images/irene.jpg";
import Wrapper from "../assets/wrappers/AddpostForm";
import { MdAddLocationAlt } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const togglestate = {
  location: false,
  Image: false,
  postImage: "",
};

const AddPostForm = () => {
  const [value, setValues] = useState(togglestate);
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleMember = () => {
    setValues({ ...value, location: !value.location });
  };

  // const imageHandler = (e) => {
  //   console.log(e.target.files[0]);
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     if (reader.readyState === 2) {
  //       console.log("hhello");
  //       setValues({ ...value, postImage: reader.result });
  //     } else {
  //       console.log("error");
  //     }
  //     reader.readAsDataURL(e.target.files[0]);
  //     console.log(value.postImage);
  //   };
  // };

  const onSelectedFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imageArray);
  };
  return (
    <Wrapper>
      <form>
        <div className="create-post">
          <div>
            <img className="profile-photo" src={irene} alt="" />
          </div>
          <input
            type="text"
            placeholder="What's on your mind, Diana?"
            id="create-post"
          />
          <div className="upload-image">
            <label htmlFor="upload">
              <BsImage className="icons-image" />
              <input
                type="file"
                name=""
                id="inputfile"
                onChange={onSelectedFile}
                multiple
              />
            </label>
          </div>
          <MdAddLocationAlt className="icons" onClick={toggleMember} />
          <input type="submit" value="Post" className="btn2 btn2-primary" />
        </div>
        <div>
          <input
            type="text"
            placeholder="enter location"
            className={value.location ? "display-none" : "location-input"}
          />
        </div>
        <div className="multiple-images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image">
                  <img src={image} alt="" />
                  <ImCross
                    className="image-cross"
                    onClick={() => {
                      setSelectedImages(
                        selectedImages.filter(
                          (indeximage) => indeximage !== image
                        )
                      );
                    }}
                  />
                </div>
              );
            })}
        </div>
      </form>
    </Wrapper>
  );
};

export default AddPostForm;
