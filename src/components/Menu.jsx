import { useEffect, useState } from "react";
import sprite from "../assets/icons/sprite.svg";

const Menu = ({ toggleMenu, isOpen }) => {
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDistance(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-[62px] right-4 z-20">
      <ul className="flex flex-col  gap-2">
        <li
          className={`w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg text-xs font-messina leading-[1.17] font-semibold cursor-pointer  hover:underline focus:underline transition-colors duration-200 ease-in-out ${
            scrollDistance > 470 || isOpen
              ? "text-white hover:text-accent focus:text-accent"
              : "hover:text-white focus:text-white"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </li>
        <li>
          <a
            href="https://discord.gg"
            className={`w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg transition-all duration-200 ease-in-out group ${
              scrollDistance > 420 || isOpen ? " text-white" : " text-dark"
            } `}
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              className={`w-4 h-4 fill-current transition-all duration-200 ease-in-out ${
                scrollDistance > 420 || isOpen
                  ? "group-hover:text-accent group-focus:text-accent"
                  : "group-hover:text-white group-focus:text-white"
              }`}
            >
              <use href={`${sprite}#icon-discord`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg transition-all duration-200 ease-in-out group ${
              scrollDistance > 370 || isOpen ? " text-white" : " text-dark"
            }`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              className={`w-4 h-4 fill-current transition-all duration-200 ease-in-out ${
                scrollDistance > 370 || isOpen
                  ? "group-hover:text-accent group-focus:text-accent"
                  : "group-hover:text-white group-focus:text-white"
              }`}
            >
              <use href={`${sprite}#icon-ship`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            className={`w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg transition-all duration-200 ease-in-out group ${
              scrollDistance > 320 || isOpen ? " text-white" : " text-dark"
            }`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              className={`w-4 h-4 fill-current transition-all duration-200 ease-in-out ${
                scrollDistance > 320 || isOpen
                  ? "group-hover:text-accent group-focus:text-accent"
                  : "group-hover:text-white group-focus:text-white"
              }`}
            >
              <use href={`${sprite}#icon-xtwit`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
