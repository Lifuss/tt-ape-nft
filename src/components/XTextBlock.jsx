import sprite from "../assets/icons/spire.svg";

const XTextBlock = ({
  xSize = "24",
  text = "",
  textSize = "text-xs",
  lineHeight = "1.14",
}) => {
  return (
    <div className="w-[75%] flex flex-col items-center">
      <svg width={xSize} height={xSize} className="mb-4">
        <use href={`${sprite}#icon-sharp`}></use>
      </svg>
      <p
        className={`font-messina ${textSize} font-light text-white text-center leading-[${lineHeight}] uppercase`}
      >
        {text}
      </p>
    </div>
  );
};

export default XTextBlock;
