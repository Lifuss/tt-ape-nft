import Slider from "react-slick";
import NavButtons from "./NavButtons";
import { mindMapArr } from "../utils/constants";
import { useRef } from "react";
import sprite from "../assets/icons/sprite.svg";

const MindMap = () => {
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
      className="px-8 w-[75%] mx-auto text-white mb-[60px] "
    >
      <h2 className="text-[32px] leading-none -tracking-wide uppercase break-normal mb-6">
        MIND map
      </h2>

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
                <p className="font-messina text-xs font-light uppercase leading-[1.17]  mb-[78px]">
                  {item.text}
                </p>

                <h3 className="text-2xl">{item.title}</h3>
              </div>
            );
          } else {
            return (
              <a
                key={index}
                className="py-6 px-3 bg-accent rounded-xl h-[242px] flex flex-col justify-between"
                href="#"
              >
                <svg className="w-6 h-6 ml-auto">
                  <use href={`${sprite}#icon-arrow`}></use>
                </svg>
                <h3 className="text-2xl">{item.title}</h3>
              </a>
            );
          }
        })}
      </Slider>
      <NavButtons next={next} previous={previous} />
    </section>
  );
};

export default MindMap;
