import headerApe from "../assets/img/headerApe.webp";
import sprite from "../assets/icons/spire.svg";

const Hero = () => {
  return (
    <section className="px-2 mb-[60px]">
      <div className="flex flex-col justify-center relative items-center mt-[54px] rounded-xl pt-[36px] pb-[19px] bg-accent">
        <h3 className="font-biro font-bold text-base">diD yOu seE iT ?</h3>
        <h1 className="font-right text-[32px] leading-none mb-2">YACHT APES</h1>
        <h3 className="font-biro font-bold text-base mb-[6px]">
          Apes aRe eveRywhere
        </h3>
        <div className="w-[65%] mb-3">
          <img src={headerApe} alt="ape in glasses h-" />
          <a
            href="#mint"
            className="inline-flex text-base justify-center font-right leading-[1.19] pt-[10px] pb-3 px-14 bg-darkOpacity backdrop-blur-md rounded-lg -mt-1 w-full"
          >
            MEET APES
          </a>
        </div>
        <p className="font-messina font-normal text-xs uppercase leading-[1.17] text-center w-[217px]">
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
        <a className="absolute left-2 top-4" href="/">
          <svg className="w-12 h-8">
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </a>
        {/* <nav>
          <ul className="flex flex-col absolute top-2 right-2 gap-2">
            <li className="w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg text-xs font-messina leading-[1.17] font-semibold cursor-pointer hover:text-white hover:underline transition-colors duration-300 ease-in-out">
              MENU
            </li>
            <li>
              <a
                href="https://discord.gg"
                className="w-12 h-12 inline-flex justify-center items-center bg-darkOpacity backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg className="w-4 h-4 fill-current group-hover:text-white transition-all duration-300 ease-in-out">
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
                <svg className="w-4 h-4 fill-current group-hover:text-white transition-all duration-300 ease-in-out">
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
                <svg className="w-4 h-4 fill-current group-hover:text-white transition-all duration-300 ease-in-out">
                  <use href={`${sprite}#icon-xtwit`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </section>
  );
};

export default Hero;
