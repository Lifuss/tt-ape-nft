import headerApe from "../assets/img/headerApe.webp";
import sprite from "../assets/icons/sprite.svg";

const Hero = () => {
  return (
    <section className="px-2 md:px-4 mb-[60px] text-dark">
      <div className="flex flex-col justify-center md:w-[736px] relative items-center mt-[54px] rounded-xl pt-[36px] pb-[19px] md:pb-0 bg-accent">
        <h3 className="font-biro font-bold text-base md:text-xl">
          diD yOu seE iT ?
        </h3>
        <h1 className="text-[9vw] md:text-[92px] md:tracking-[0.01em] font-extrabold leading-none mb-2">
          YACHT APES
        </h1>
        <h3 className="font-biro font-bold text-base md:text-xl mb-[6px]">
          Apes aRe eveRywhere
        </h3>
        <div className="w-[65%] mb-3">
          <img src={headerApe} alt="ape in glasses" className="md:w-[283px]" />
          <a
            href="#mint"
            className="inline-flex text-base justify-center leading-[1.19] pt-[10px] pb-3 px-14 bg-darkOpacity backdrop-blur-md rounded-lg -mt-1 w-full hover:text-white focus:text-white transition-colors duration-300 ease-in-out"
          >
            MEET APES
          </a>
        </div>
        <p className="font-messina font-normal text-xs uppercase leading-[1.17] text-center w-[217px]">
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
