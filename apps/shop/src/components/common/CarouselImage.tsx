"use client";
import { Box } from "@chakra-ui/react";
import { Image } from "database";
import Slider from "react-slick";
export interface ImageCardProps {
  images: Image[];
}
const CarouselImage: React.FC<ImageCardProps> = ({ images }) => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      className="rounded-3xl w-full  bg-blue-100"
      height={"244px"}
      width={"full"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} className="w-full">
        {images.map((image) => (
          <Box
            key={image.id}
            className="rounded-3xl bg-blue-100 w-full"
            height={"244px"}
            overflow={"hidden"}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${image.url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};
export default CarouselImage;
