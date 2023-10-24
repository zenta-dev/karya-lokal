import React from 'react';
import Image from 'next/image'

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
    return (
        <div className="outline-none border-none relative">
            <div className="absolute left-[30px] md:left-[70px] max-w-[350px] 
            top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] 
            sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
                <h3 className="text-[#1E3A8A] text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
                    {mainTitle}
                </h2>

                <h3 className="text-[24px] text-blakish">
                    Hanya{" "}
                    <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
                </h3>
                <div className="bg-[#1E3A8A] font-medium text-white text-[14px] md:text-[20px] px-12 pt-2.5 pb-2.5 rounded-lg inline-block cursor-pointer hover:bg-blue-600">
                    Lihat Produk
                </div>
            </div>

            <div className="c">
                <Image 
                    src={img}
                    alt="banner"
                    width={500}
                    height={500}
                    layout="responsive" 
                />
            </div>
        </div>
    );
};

export default Slide;
