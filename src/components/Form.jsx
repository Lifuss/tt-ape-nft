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
      className="flex flex-col items-center w-[75%] mt-4 gap-4"
    >
      {formRender.map((item, index) => {
        return (
          <label key={index} className="flex w-full">
            <div className="w-12 h-12 flex justify-center items-center bg-dark rounded-s-lg shrink-0">
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
                className={`bg-inherit h-12 border-t-[1px] border-b-[1px] border-e-[1px] border-s-[1px] border-dark ${
                  errors[item] && "border-accent"
                } rounded-e-lg font-messina text-xs font-light text-white leading-[1.17] pl-3 focus:outline-none focus:border-white `}
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
        className="bg-accent text-white text-lg h-[48px] rounded-xl w-full"
      >
        MINT
      </button>
    </form>
  );
};

export default Form;
