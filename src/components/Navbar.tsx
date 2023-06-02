import Image from "next/image";
import LogoIcon from "/public/logo-w.svg";

export const Navbar = () => {
  return (
    <nav className="top-0 sticky w-full z-10">
      <div className="flex flex-row py-5 justify-center bg-nua-purple-secondary">
        <Image src={LogoIcon} height={30} alt="icon" />
      </div>
    </nav>
  );
};
