import Image from "next/image";
import LogoIcon from "/public/logo-w.svg";

export const Navbar = () => {
  return (
    <nav className="top-0 sticky w-full z-10">
      <div className="flex flex-row py-5 justify-center bg-nua-purple-secondary">
        <Image src={LogoIcon} height={23} alt="icon" />
        <span className="pl-4 pt-1 text-xl font-text font-thin text-nua-white-main">
          Resultados del Test
        </span>
      </div>
    </nav>
  );
};
