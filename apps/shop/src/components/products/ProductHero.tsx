"use client";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import CarouselImage from "../common/CarouselImage";

interface ProductHeroProps {
  products: Product[];
}

const ProductHero: React.FC<ProductHeroProps> = ({ products }) => {
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
      className="rounded-3xl h-[450px] w-full bg-blue-100 "
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <h1 className="text-4xl font-bold text-center items-center pt-8">
        Hot Sales
      </h1>

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
        <BiLeftArrowAlt />
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
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {products.map((product) => (
          <div key={product.id} className="flex justify-between flex-col p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-xl">{product.description}</p>
              </div>

              <div className="flex justify-end items-center w-full pl-32">
                <CarouselImage images={product.images} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductHero;
