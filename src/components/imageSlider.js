import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/imageSlider";
const ImageSlider = ({ data }) => {
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <div>
        <Slider {...setting} className="slideimages">
          {data.map((image) => {
            return (
              <div key={image} className="slide-container">
                <img src={image} alt="" className="slideimg" />
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default ImageSlider;
