import { memo } from "react";
import { twMerge } from "tailwind-merge";

export const CustomButton = memo(({ mode, children, className, ...rest }) => {
  let buttonStyle =
    "font-gamja text-dark cursor-pointer disabled:text-gray-400";
  switch (mode) {
    case "text":
      buttonStyle = twMerge("text-base hover:text-primary", buttonStyle);
      break;
    case "sumbit":
      buttonStyle = twMerge("", buttonStyle);
      break;
    case "icon":
      buttonStyle = twMerge("", buttonStyle);
      break;
    default:
      buttonStyle = twMerge(
        "w-32 h-[3rem] bg-primary text-2xl rounded-2xl border-white shadow-md hover:bg-secondary hover:outline-1 hover:outline-dark  active:shadow-none",
        buttonStyle
      );
      break;
  }

  return (
    <button className={twMerge(buttonStyle, className, "")} {...rest}>
      {children}
    </button>
  );
});
