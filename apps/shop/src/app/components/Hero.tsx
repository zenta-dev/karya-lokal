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
            img: "/Bundle Somethinc.jpg",
            price: "Rp.179.000",
            mainTitle: "SOMETHINC MAKE UP BUNDLE",
        },
        {
            id: 1,
            img: "/Bundle Somethinc.jpg",
            mainTitle: "SOMETHINC MAKE UP BUNDLE",
            price: "Rp.179.000",
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
            <div className="container pt-10 pb-10">
                <h2 className="text-center font-medium text-3xl">Flash Sale</h2>
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