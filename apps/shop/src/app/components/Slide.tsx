import { priceFormatter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  id: string;
  img: string;
  title: string;
  mainTitle: string;
  price: string;
  percent?: number;
}

const Slide: React.FC<propsType> = ({
  img,
  title,
  mainTitle,
  price,
  percent,
  id,
}) => {
  return (
    <div className="outline-none border-none relative">
      <div
        className="absolute left-[30px] md:left-[70px] max-w-[350px] 
  top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] 
  sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none z-10 blend-text"
      >
        <h3 className="text-[24px] lg:text-[28px] bg-slate-50">{title}</h3>
        <h2 className="text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[24px]">Hanya</h3>
        <b className="text-[20px] md:text-[24px] lg:text-[30px]">
          {priceFormatter.format((parseInt(price) * (100 - percent!)) / 100)}
        </b>
        <Link
          className="bg-[#1E3A8A] font-medium text-white text-[14px] md:text-[20px] px-12 pt-2.5 pb-2.5 rounded-lg inline-block cursor-pointer hover:bg-blue-600"
          href={`/product/` + id}
        >
          Lihat Produk
        </Link>
      </div>
      {/* off percentage badgeon top right */}
      <div className="relative h-60 sm:h-96 ">
        <Image
          src={img}
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute right-[5px] md:right-[30px] top-[30px] text-center">
        <div className="bg-[#1E3A8A] text-white text-[14px] md:text-[20px] px-2.5 pt-1.5 pb-1.5 rounded-lg inline-block cursor-pointer">
          <h1 className="text-[20px] md:text-[24px] lg:text-[30px]">
            {percent} %
          </h1>
          <h1 className="text-[20px] md:text-[24px] lg:text-[30px]">Off</h1>
        </div>
      </div>
    </div>
  );
};

export default Slide;
