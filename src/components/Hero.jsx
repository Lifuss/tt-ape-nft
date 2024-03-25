import headerApe from "../assets/img/headerApe.webp";
import sprite from "../assets/icons/sprite.svg";

const Hero = ({ isTablet }) => {
  return (
    <section className="px-2 md:px-4 mb-[60px] md:mb-[80px] desk:mb-[120px] text-dark mt-[54px] desk:mt-4">
      <div className="flex flex-col justify-center md:w-[736px] desk:w-[1408px] md:h-[421px]  desk:h-[677px] relative items-center rounded-xl pt-[36px] md:pt-[104px] pb-[19px] md:pb-[90px] bg-accent md:px-[72px]  mx-auto">
        <h3 className="font-biro font-bold text-base md:text-xl desk:text-2xl md:mr-auto desk:mr-[900px]">
          diD yOu seE iT ?
        </h3>
        <h1 className="text-[12vw] md:text-[92px] desk:text-[164px] md:tracking-[0.01em] leading-tight font-extrabold md:flex md:gap-40 desk:gap-[260px]">
          {!isTablet ? (
            "YACHT APES"
          ) : (
            <>
              <span className="md:-ml-[38px] desk:-ml-[80px]">YACHT</span>
              <span>APES</span>
            </>
          )}
        </h1>
        <h3 className="font-biro font-bold text-base md:text-xl desk:text-2xl mb-[6px] md:mb-0 md:mr-auto desk:mr-[620px]">
          Apes aRe eveRywhere
        </h3>
        <div className="w-[65%] md:w-full mb-3">
          <img
            src={headerApe}
            alt="ape in glasses"
            className="md:w-[283px] desk:w-[463px] desk:h-[612px] md:absolute md:left-[45%] md:bottom-0 md:-translate-x-1/2"
          />
          <a
            href="#mint"
            className="inline-flex text-base desk:text-[28px] justify-center leading-[1.19] pt-[10px] pb-3 px-14 md:px-[61px] desk:px-[110px] desk:w-fit bg-darkOpacity backdrop-blur-md rounded-lg -mt-1 w-full hover:text-white focus:text-white transition-colors duration-300 ease-in-out md:w-[190px] desk:h-[70px] md:absolute md:right-[92px] desk:right-[240px] md:bottom-[32px] desk:bottom-[81px] desk:items-center"
          >
            MEET APES
          </a>
        </div>
        <p className="font-messina font-normal text-xs desk:text-base uppercase leading-[1.17] desK:leading-[1.19] text-center md:text-balance w-[217px] md:w-[190px] md:absolute md:right-[92px] desk:right-[240px] md:bottom-[92px] desk:bottom-[179px] desk:h-[57px] desk:w-[337px] ">
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
        <a
          className="absolute left-2 desk:left-[96px] top-4 desk:top-[39px]"
          href="/"
        >
          <svg className={`w-12 h-8 desk:w-[72px] desk:h-[50px]`}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
