import { useForm } from "react-hook-form";
import sprite from "../assets/icons/sprite.svg";
import {
  formRender,
  discordPattern,
  metaMaskPattern,
} from "../utils/constants";
import { toast } from "react-toastify";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success(`Welcome ${data.discord}! Mint will take up to 10 minutes`);
    console.log("Form submitted", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-[75%] desk:w-[397px] mt-4 desk:mt-10 gap-4 desk:gap-6"
    >
      {formRender.map((item, index) => {
        return (
          <label key={index} className="flex w-full">
            <div className="w-12 desk:w-16 h-12 desk:h-16 flex justify-center items-center bg-dark rounded-s-lg shrink-0">
              <svg width="24" height="24" className="fill-[#5A65F2]">
                <use href={`${sprite}#icon-${item}`}></use>
              </svg>
            </div>
            <div className="flex flex-col grow">
              <input
                type="text"
                {...register(item, {
                  required: true,
                  pattern:
                    item === "discord" ? discordPattern : metaMaskPattern,
                })}
                placeholder={
                  item === "discord" ? "DISCORD USERNAME" : "ADDRESS"
                }
                className={`bg-inherit h-12 desk:h-16 border-t-[1px] border-b-[1px] border-e-[1px] border-s-[1px] border-dark ${
                  errors[item] && "border-accent"
                } rounded-e-lg font-messina text-xs desk:text-base font-light text-white leading-[1.17] desk:leading-[1.19] pl-3 desk:pl-6 focus:outline-none focus:border-white `}
              />
              {errors[item] && (
                <p className="text-accent text-xs ml-auto" role="alert">
                  WRONG {item === "discord" ? "DISCORD" : "ADDRESS"}
                </p>
              )}
            </div>
          </label>
        );
      })}
      <button
        type="submit"
        className="bg-accent text-white text-lg desk:text-[28px] h-[48px] desk:h-[70px] rounded-xl w-full"
      >
        MINT
      </button>
    </form>
  );
};

export default Form;
