import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  mainTitle: string;
  desc: string;
}

const BestSeller: React.FC<PropsType> = ({ title, mainTitle, desc }) => {
  const [cornerRadius, setCornerRadius] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cornerRadius < 100) {
        setCornerRadius(cornerRadius + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [cornerRadius]);

  return (
    <div className="pb-10 pt-16 flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="font-medium text-3xl pb-10">Best Seller</h2>
      </div>
      <div
        className="bg-[#DBEAFE] py-10 mx-4 relative rounded-3xl shadow-2xl"
      >
        <div className="text-center">
          <h2 className="mt-5 text-blackish text-2xl font-semibold">Check It Out Our Best Product!</h2>
        </div>
        <div className="flex justify-center h-full">
          <div className="w-1/2 text-left pl-16">
            <h2 className="pt-5 pb-5 text-blackish text-[26px] md:text-[30px] lg:text-[32px] font-medium leading-[1.2]">
              Flawless Macrame Minibag
            </h2>
            <h3 className="pb-5 text-blackish text-[26px] md:text-[30px] lg:text-[40px] font-bold leading-[1.2]">
              Dealone Minibag
            </h3>
            <h1 className="text-blackish text-[26px] md:text-[30px] lg:text-[20px] font-regular leading-[1.2]">
              Tas mini ini merupakan seni kerajinan yang menggunakan teknik simpul persegi dengan rantaian benang awal dan akhir hingga menghasilkan suatu hasil tenunan.
            </h1>
            <div className="bottom-0 left-0 my-10">
              <a
                href=""
                className="bg-[#1E3A8A] mb-5 font-medium text-white text-[14px] md:text-[20px] px-12 pt-2.5 pb-2.5 
                rounded-lg inline-block cursor-pointer hover:bg-blue-600">
                Lihat Produk
              </a>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/Best Seller.svg"
              alt="Product Image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
