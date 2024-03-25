import sprite from "../assets/icons/sprite.svg";

const XTextBlock = ({
  xSize = "24",
  text = "",
  textSize = "text-xs",
  lineHeight = "1.14",
  width = "75%",
}) => {
  return (
    <div className={`w-[${width}] flex flex-col items-center text-center`}>
      <svg width={xSize} height={xSize} className="mb-4">
        <use href={`${sprite}#icon-sharp`}></use>
      </svg>
      <p
        className={`font-messina ${textSize} desk:text-2xl font-light text-white text-center leading-[${lineHeight}] desk:leading-[1.21] uppercase`}
      >
        {text}
      </p>
    </div>
  );
};

export default XTextBlock;
