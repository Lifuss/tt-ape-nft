import { useRef } from "react";

import NavButtons from "./NavButtons";
import Slider from "react-slick";

const Collection = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  let artsArr = [];
  for (let i = 1; i <= 14; i++) {
    artsArr.push(i);
  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section id="arts" className="px-8 w-[75%] mx-auto mb-[60px]">
      <h2 className="text-[28px] text-white font-black leading-[0.91] mb-6 text-center">
        COLLECTION
      </h2>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="mb-5"
      >
        {artsArr.map((item, key) => (
          <div className="flex flex-col justify-between" key={key}>
            <img
              className="rounded-xl"
              src={`./arts/nft${item}.webp`}
              alt="ape"
            />
          </div>
        ))}
      </Slider>

      <NavButtons next={next} previous={previous} />
    </section>
  );
};

export default Collection;
