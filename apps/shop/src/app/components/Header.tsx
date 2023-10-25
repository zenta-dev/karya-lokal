import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ProfileWrapper } from "./profile-wrapper";
const Header = () => {
  const useImageLogo = true;
  const { userId } = auth();

  return (
    <div className="border-b border-gray-200 px-12">
      <div className="container flex flex-col sm:flex-row justify-between items-center py-2">
        <Link href="/">
          {" "}
          <div className="flex items-center space-x-4">
            {useImageLogo ? (
              <Image src="/logo.png" alt="Logo" width="48" height="48" />
            ) : (
              <span className="font-bold text-4xl text-blakish">Logo</span>
            )}
            <div className="hidden sm:block font-bold text-3xl text-blakish">
              KaryaLokal
            </div>
          </div>
        </Link>

        <div className="w-full sm:w-[300px] md:w-[70%] lg:w-[50%] relative my-2 sm:my-0">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Cari item..."
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>

        <div className="flex gap-4 items-center justify-end lg:space-x-4 text-gray-500 text-[30px]">
          <div className="relative">
            <Link href="/cart">
              <HiOutlineShoppingBag />
              <div className="bg-[#1E3A8A] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </Link>
          </div>
          <ProfileWrapper />
        </div>
      </div>
    </div>
  );
};

export default Header;
