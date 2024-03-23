import sprite from "../assets/icons/spire.svg";
const renderArr = ["discord", "metamask"];

const Form = () => {
  return (
    <form className="flex flex-col items-start w-[75%] mt-4 gap-4">
      {renderArr.map((item, index) => {
        return (
          <label key={index} className="flex">
            <div className="w-12 h-12 flex justify-center items-center bg-dark rounded-s-lg shrink-0">
              <svg width="24" height="24" className="fill-blue-500">
                <use href={`${sprite}#icon-${item}`}></use>
              </svg>
            </div>
            <input
              type="text"
              name={item}
              className="bg-inherit border-t-[1px] border-b-[1px] border-e-[1px] border-s-[1px] border-dark rounded-e-lg font-messina text-sm font-light text-white leading-[1.17] w-[75%] py-3 px-4 pl-6 focus:outline-none focus:border-white"
            />
          </label>
        );
      })}
      <button
        type="submit"
        className="bg-accent text-white text-lg h-[48px] rounded-xl w-full"
      >
        MINT
      </button>
    </form>
  );
};

export default Form;
