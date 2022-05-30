import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/imageSlider";
const ImageSlider = ({ data }) => {
  const setting = {
    dots: true,
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
              <div>
                <img src={image.image} alt="" className="slideimg" />
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default ImageSlider;
