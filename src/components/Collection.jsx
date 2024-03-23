import nftImg from "../assets/img/nftExample.webp";
import NavButtons from "./NavButtons";

const Colection = () => {
  return (
    <section className="px-8 flex flex-col items-center mb-[60px]">
      <h2 className="text-[28px] text-white font-black leading-[0.91] mb-6">
        COLLECTION
      </h2>
      <div>
        <img className="rounded-xl mb-5" src={nftImg} alt="name" />
      </div>
      <NavButtons />
    </section>
  );
};

export default Colection;
