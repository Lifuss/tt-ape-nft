import { useState } from "react";
import { faqs } from "../utils/constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-8 flex flex-col items-center mb-[60px]">
      <h2 className="text-[32px] text-white font-black leading-[0.91] mb-[18px]">
        FAQ
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`p-2 rounded-xl w-[75%] flex gap-2 group ${
            openIndex === index && "bg-dark"
          }`}
          onClick={() => setOpenIndex(index)}
        >
          <span
            className={`font-biro  text-sm whitespace-nowrap  ${
              openIndex === index
                ? "text-white"
                : "text-accent group-hover:text-white"
            } duration-150`}
          >
            [ {index + 1} ]
          </span>
          <div>
            <div
              className={`font-bold text-base cursor-pointer duration-150 leading-none tracking-tight ${
                openIndex === index
                  ? "text-accent"
                  : "text-white group-hover:text-accent"
              }`}
            >
              {faq.question}
            </div>
            <div
              className={`mt-[10px] font-messina font-thin text-white text-xs uppercase transition-all duration-500 ease-in-out overflow-hidden leading-[1.17] ${
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
