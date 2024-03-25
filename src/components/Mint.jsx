import Form from "./Form";
import XTextBlock from "./XTextBlock";

const Mint = () => {
  return (
    <section
      id="mint"
      className="px-8 md:px-0 flex flex-col items-center mb-[60px] md:mb-[80px] md:w-[397px] md:mx-auto"
    >
      <h2 className="text-[44px] md:text-[80px] text-white font-black leading-[0.91] md:leading-none mb-6 uppercase">
        Are you in?
      </h2>
      <XTextBlock
        xSize="36"
        text="Join the YACHT APE community to be one of the first to receive our limited edition NFT"
        lineHeight="1.19"
        textSize="text-base"
      />
      <Form />
    </section>
  );
};

export default Mint;
