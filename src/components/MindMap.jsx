import Slider from "react-slick";
import NavButtons from "./NavButtons";
import { mindMapArr } from "../utils/constants";
import { useRef } from "react";
import sprite from "../assets/icons/sprite.svg";

const MindMap = ({ isTablet }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section
      id="mindmap"
      className="px-8 md:px-0 w-[75%] md:w-[592px] desk:w-[1032px] text-white mb-[60px] md:mb-[80px] desk:mb-[120px] md:flex md:justify-center md:items-center md:flex-col mx-auto"
    >
      <h2 className="text-[44px] md:text-[80px] desk:text-[160px] leading-none uppercase mb-6 md:mb-[40px] desk:mb-[80px] text-center">
        MIND map
      </h2>

      {!isTablet ? (
        <>
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            className="mb-6"
          >
            {mindMapArr.map((item, index) => {
              if (!item.icon) {
                return (
                  <div
                    key={index}
                    className="py-6 px-3 bg-dark rounded-xl h-[242px] flex flex-col justify-between"
                  >
                    <p className="font-messina text-xs font-light uppercase leading-[1.17]">
                      {item.text}
                    </p>

                    <h3 className="text-[32px] uppercase">{item.title}</h3>
                  </div>
                );
              } else {
                return (
                  <a
                    key={index}
                    className="py-6 px-3 bg-accent rounded-xl h-[242px] flex flex-col justify-between"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <svg className="w-6 h-6 ml-auto">
                      <use href={`${sprite}#icon-arrow`}></use>
                    </svg>
                    <h3 className="text-[32px] uppercase">{item.title}</h3>
                  </a>
                );
              }
            })}
          </Slider>
          <NavButtons next={next} previous={previous} />
        </>
      ) : (
        <div className="grid grid-cols-2 gap-6 ">
          {mindMapArr.map((item, index) => {
            if (!item.icon) {
              return (
                <div
                  key={index}
                  className="p-6 bg-dark rounded-xl h-[242px] desk:h-[480px] w-[284px] desk:w-[504px] flex flex-col justify-between"
                >
                  <p className="font-messina w-[128px] desk:w-[228px] ml-auto text-xs desk:text-2xl font-light uppercase leading-[1.17]">
                    {item.text}
                  </p>

                  <h3 className="text-[32px] desk:text-[64px] uppercase">
                    {item.title}
                  </h3>
                </div>
              );
            } else {
              return (
                <a
                  key={index}
                  className="p-6 bg-accent rounded-xl h-[242px] desk:h-[480px] w-[284px] desk:w-[504px] flex flex-col justify-between"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg className="w-6 h-6 ml-auto">
                    <use href={`${sprite}#icon-arrow`}></use>
                  </svg>
                  <h3 className="text-[32px] desk:text-[64px] uppercase">
                    {item.title}
                  </h3>
                </a>
              );
            }
          })}
        </div>
      )}
    </section>
  );
};

export default MindMap;
