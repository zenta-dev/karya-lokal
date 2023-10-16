"use client";
import { Box } from "@chakra-ui/react";
import { ProductImage } from "@karya-lokal/database";
import Slider from "react-slick";
export interface ImageCardProps {
  images: ProductImage[];
  height?: string;
  width?: string;
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
}
const CarouselImage: React.FC<ImageCardProps> = ({
  images,
  height,
  width,
  className,
  children,
  childrenClassName,
}) => {
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
      className={className}
      height={height || "244px"}
      width={width || "full"}
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
            className="rounded-3xl w-full flex items-center justify-center"
            height={height || "800px"}
            width={width || "full"}
            overflow={"hidden"}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${image.url})`}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <div className={childrenClassName}>{children}</div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default CarouselImage;
