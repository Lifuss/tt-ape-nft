import { useMediaQuery } from "react-responsive";
import sprite from "../assets/icons/sprite.svg";

const RunningLine = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  let runningTextArr = ["BREAK RULES", "HAVE NO LIMITS"];
  if (isTablet) {
    runningTextArr = [
      "BREAK RULES",
      "HAVE NO LIMITS",
      "BREAK RULES",
      "HAVE NO LIMITS",
    ];
  }

  return (
    <div className="w-screen bg-accent overflow-hidden">
      <div className="inline-flex text-white text-[36px] items-center space-x-4 whitespace-nowrap animate-mobile md:animate-table">
        <div className="flex items-center space-x-4">
          {runningTextArr.map((item, key) => {
            return (
              <div key={key} className="flex items-center gap-4">
                <svg className="" width={36} height={36}>
                  <use href={`${sprite}#icon-sharp`} />
                </svg>
                {item}
              </div>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          {runningTextArr.map((item, key) => {
            return (
              <div key={key} className="flex items-center gap-4">
                <svg className="" width={24} height={24}>
                  <use href={`${sprite}#icon-sharp`} />
                </svg>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RunningLine;
