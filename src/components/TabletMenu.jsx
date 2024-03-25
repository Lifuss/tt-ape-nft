import { useEffect, useState } from "react";
import { mobileMenu } from "../utils/constants";

const TabletMenu = ({ toggleMenu, isOpen }) => {
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDistance(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ul
      className={`flex font-messina font-normal text-xs desk:text-base leading-[1.17] desk:leading-[1.19] bg-darkOpacity backdrop-blur-md uppercase fixed top-[62px] desk:top-[40px] right-4 md:right-[76px] desk:right-[192px] min-[1920px]:right-[400px] z-20 transition-opacity duration-500 rounded-s-xl ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {mobileMenu.map((item, index) => (
        <li key={index}>
          <a
            href={`#${item}`}
            className={`w-12 desk:w-20 h-12 desk:h-20 inline-flex justify-center items-center font-semibold cursor-pointer  hover:underline focus:underline transition-colors duration-200 ease-in-out ${
              scrollDistance > 470
                ? "text-white hover:text-accent focus:text-accent"
                : "hover:text-white focus:text-white"
            }`}
            onClick={toggleMenu}
          >
            {item === "mindmap" ? "m-map" : item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TabletMenu;
