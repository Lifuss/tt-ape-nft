import { useState } from "react";
import { faqs } from "../utils/constants";

const Faq = ({ isTablet }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="px-8 md:w-[592px] desk:w-[1032px] md:mx-auto flex flex-col items-center md:items-center mb-[60px] md:mb-[80px]  desk:mb-[120px]"
    >
      <h2 className="text-[44px] desk:text-[160px] md:text-[80px] text-white font-black leading-[0.91] mb-[18px] desk:mb-[80px]">
        FAQ
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`p-2 md:pt-[18px] md:pb-[24px] rounded-xl w-[75%] md:w-[592px]  desk:w-[1032px] flex gap-2 md:gap-6 group md:relative ${
            openIndex === index && "bg-dark"
          }`}
          onClick={() => setOpenIndex(index)}
        >
          {isTablet && (
            <img
              src={`./questions/question${index + 1}.webp`}
              alt="ape"
              className={` h-[183px] desk:h-[282px] transform rotate-[-12deg] transition-all duration-500 ease-in-out rounded-2xl absolute top-0 left-[15px] ${
                openIndex === index ? "max-h-64" : "max-h-0"
              }`}
            />
          )}
          <span
            className={`font-biro text-sm md:text-base desk:text-2xl whitespace-nowrap md:ml-[170px] desk:ml-[280px]  ${
              openIndex === index
                ? "text-white"
                : "text-accent group-hover:text-white"
            } duration-150`}
          >
            [ {index + 1} ]
          </span>
          <div>
            <div
              className={`font-bold text-xl md:text-[32px] desk:text-[64px] cursor-pointer duration-150 leading-none ${
                openIndex === index
                  ? "text-accent"
                  : "text-white group-hover:text-accent"
              }`}
            >
              {faq.question}
            </div>
            <div
              className={`mt-[10px] font-messina font-light text-white text-xs desk:text-base uppercase transition-all duration-500 ease-in-out overflow-hidden leading-[1.17] ${
                openIndex === index ? "max-h-64" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;
