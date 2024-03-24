import { useEffect } from "react";
import sprite from "../assets/icons/sprite.svg";
import { mobileMenu } from "../utils/constants";
const MobileMenu = ({ toggleMenu, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      className={`h-screen fixed left-0 top-0 z-10 bg-dark overflow-auto transition-width duration-200 ${
        isOpen ? "w-screen" : "w-0"
      }`}
    >
      <a className="absolute left-4 top-[70px]" href="/">
        <svg className="w-12 h-8 fill-white">
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </a>
      <ul className="flex flex-col items-center justify-center h-full gap-4 font-messina font-normal leading-[1.21] tracking-wide uppercase">
        {mobileMenu.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item}`}
              className="text-white text-2xl"
              onClick={toggleMenu}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <footer className="absolute bottom-5 left-[50%] -translate-x-2/4 flex justify-center">
        <p className="text-white text-sm font-normal uppercase text-center leading-[1.17] tracking-wide">
          © Yacht ape 2024 all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default MobileMenu;
