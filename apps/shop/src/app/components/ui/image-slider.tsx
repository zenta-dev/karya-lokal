"use client";
import Slider from "react-slick";
import Slide from "../Slide";

interface SlideData {
  id: string;
  name: string;
  percent: number;
  price: number;
  image: string;
}

interface ImageSliderProps {
  slidesData: SlideData[];
  settings?: object;
}

const ImageSlider = ({ slidesData, settings }: ImageSliderProps) => {
  settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {slidesData.map((item) => (
        <Slide
          key={item.id}
          id={item.id}
          img={item.image}
          mainTitle={item.name}
          price={item.price.toString()}
          percent={item.percent}
          title={""}
        />
      ))}
    </Slider>
  );
};
export default ImageSlider;
