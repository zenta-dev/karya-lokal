'use client';

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHouver: false,
    };

    const slidesData = [
        {
            id: 0,
            img: "Flawless Macrame Minibag.svg",
            price: "Rp.29.000",
            mainTitle: "OCTOBER FLASH SALE",
        },
        {
            id: 1,
            img: "/Macramé Drawstring Backpack.jpeg",
            mainTitle: "MACRAME DRAWSTRING BACKPACK",
            price: "Rp.57.000",
        },
        {
            id: 2,
            img: "/Bundle Somethinc.jpg",
            mainTitle: "SOMETHINC MAKE UP BUNDLE",
            price: "Rp.179.000",
        },
    ]

    return (
        <div>
            <div className="container pt-30 pb-16">
                <h2 className="text-center font-medium text-4xl pb-4">Flash Sale</h2>
            </div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slidesData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            mainTitle={item.mainTitle}
                            price={item.price} title={""}                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;