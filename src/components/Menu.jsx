import sprite from "../assets/icons/spire.svg";

const Menu = () => {
  return (
    <nav className="fixed top-[62px] right-4 z-10">
      <ul className="flex flex-col  gap-2">
        <li className="w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg text-xs font-messina leading-[1.17] font-semibold cursor-pointer hover:text-white focus:text-white  hover:underline focus:underline transition-colors duration-300 ease-in-out">
          MENU
        </li>
        <li>
          <a
            href="https://discord.gg"
            className="w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="w-4 h-4 fill-current group-hover:text-white group-focus:text-white transition-all duration-300 ease-in-out">
              <use href={`${sprite}#icon-discord`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="w-4 h-4 fill-current group-hover:text-white group-focus:text-white transition-all duration-300 ease-in-out">
              <use href={`${sprite}#icon-ship`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            className="w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="w-4 h-4 fill-current group-hover:text-white group-focus:text-white transition-all duration-300 ease-in-out">
              <use href={`${sprite}#icon-xtwit`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
