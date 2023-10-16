"use client";
"use client";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import Slider from "react-slick";
import CarouselImage from "../common/CarouselImage";
interface HeroProductsProps {
  data: any[];
}
export const HeroProducts: React.FC<HeroProductsProps> = ({ data }) => {
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
  const [slider, setSlider] = useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Box
      className="rounded-3xl h-[450px] w-full   "
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
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
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <ArrowLeft />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <ArrowRight />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((product) => (
          <div className=" rounded-xl overflow-hidden" key={product.id}>
            <CarouselImage
              height="500px"
              images={product.images}
              className="rounded-3xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
              <div className="w-full flex flex-col justify-center items-center text-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                  <br />
                  <br />
                  <br />

                  {product.name}
                  <br />
                </div>
              </div>
            </CarouselImage>
          </div>
        ))}
      </Slider>
    </Box>
  );
};
