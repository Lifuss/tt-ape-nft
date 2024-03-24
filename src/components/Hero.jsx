import headerApe from "../assets/img/headerApe.webp";
import sprite from "../assets/icons/sprite.svg";

const Hero = ({ isTablet }) => {
  return (
    <section className="px-2 md:px-4 mb-[60px] md:mb-[80px] text-dark">
      <div className="flex flex-col justify-center md:w-[736px] md:h-[421px] relative items-center mt-[54px] rounded-xl pt-[36px] md:pt-[104px] pb-[19px] md:pb-[90px] bg-accent md:px-[72px]  mx-auto">
        <h3 className="font-biro font-bold text-base md:text-xl md:mr-auto">
          diD yOu seE iT ?
        </h3>
        <h1 className="text-[12vw] md:text-[92px] md:tracking-[0.01em] leading-tight font-extrabold md:flex md:gap-40">
          {!isTablet ? (
            "YACHT APES"
          ) : (
            <>
              <span className="md:-ml-[38px]">YACHT</span>
              <span>APES</span>
            </>
          )}
        </h1>
        <h3 className="font-biro font-bold text-base md:text-xl mb-[6px] md:mb-0 md:mr-auto">
          Apes aRe eveRywhere
        </h3>
        <div className="w-[65%] md:w-full mb-3">
          <img
            src={headerApe}
            alt="ape in glasses"
            className="md:w-[283px] md:absolute md:left-[45%] md:bottom-0 md:-translate-x-1/2"
          />
          <a
            href="#mint"
            className="inline-flex text-base justify-center leading-[1.19] pt-[10px] pb-3 px-14 md:px-[61px] bg-darkOpacity backdrop-blur-md rounded-lg -mt-1 w-full hover:text-white focus:text-white transition-colors duration-300 ease-in-out md:w-[190px] md:absolute md:right-[92px] md:bottom-[32px]"
          >
            MEET APES
          </a>
        </div>
        <p className="font-messina font-normal text-xs uppercase leading-[1.17] text-center md:text-balance w-[217px] md:w-[190px] md:absolute md:right-[92px] md:bottom-[92px]">
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
        <a className="absolute left-2 top-4" href="/">
          <svg className={`w-12 h-8`}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
