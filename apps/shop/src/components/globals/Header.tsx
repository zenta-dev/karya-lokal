import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { FaBell, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
export default function Header() {
  return (
    <div className="bg-blue-200 my-4 p-1 px-4 rounded-3xl shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo-karya-lokal.png"
            alt="KaryaLokal"
            width={50}
            height={50}
          />
        </Link>
        <h1 className="text-xl font-semibold">KaryaLokal</h1>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Cari Produk"
          className=" w-96  rounded-3xl bg-white  pl-3 pr-12 py-2 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <FaSearch />
        </button>
      </div>

      <div className="flex space-x-4">
        <Link href="/login">
          <FaUser />
        </Link>
        <Link href="/notification">
          <FaBell />
        </Link>
        <Link href="/cart">
          <FaShoppingCart />
        </Link>
        <Link href="/menu">
          <BiMenu />
        </Link>
      </div>
    </div>
  );
}
