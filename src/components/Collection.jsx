import { useRef } from "react";

import NavButtons from "./NavButtons";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const Collection = ({ isTablet }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

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

  let toShow = 1;
  if (isTablet) {
    toShow = 2;
  }
  if (isDesktop) {
    toShow = 4;
  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      id="arts"
      className="px-8 md:px-0 w-[75%] md:w-[592px] desk:w-[1032px] mx-auto mb-[60px]"
    >
      <h2 className="text-[44px] md:text-[80px] desk:text-[160px] text-white font-black leading-[0.91] mb-6 md:mb-10 desk:mb-20 text-center">
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
          <img
            key={key}
            className="rounded-xl md:rounded-3xl md:w-[284px] desk:w-[240px] md:h-[336px] desk:[280px] object-cover"
            src={`./arts/nft${item}.webp`}
            alt="ape"
          />
        ))}
      </Slider>

      <NavButtons next={next} previous={previous} />
    </section>
  );
};

export default Collection;
