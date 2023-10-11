import HeaderLogo from "@/../public/images/logo/karya-lokal.png";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar";
import LoginPopUp from "../auth/LoginPopUp";
import { ThemeButton } from "./themes/ThemeButton";
import RegisterPopUp from "../auth/RegisterPopUp";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 items-center space-x-2 font-medium backdrop-filter backdrop-blur-lg">
      <div className="  mx-48 px-4 md:px-6 gap-4 flex justify-between items-center flex-nowrap sm:flex-wrap">
        <div className="header-items">
          <Link href="/" className="flex items-center">
            <div>
              <Image
                src={HeaderLogo}
                width={36}
                height={36}
                alt="Logo"
                loading="lazy"
              />
            </div>
            <h1 className="text-lg ">Karya Lokal</h1>
          </Link>
        </div>
        <div className="header-items">
          <SearchBar />
        </div>
        <div className="header-items">
          <ThemeButton />
          <LoginPopUp />
          <RegisterPopUp />
        </div>
      </div>
    </header>
  );
};

export default Header;
