import { memo, useCallback, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { CustomInput } from ".";
import { CustomButton } from "../buttons/Button";
import { twMerge } from "tailwind-merge";

const FormInput = ({ labelText, error, ...props }) => {
  const [inputType, setInputType] = useState(props.type || "text");
  const handleEyeClick = useCallback(() => {
    setInputType((prev) => (prev === "text" ? "password" : "text"));
  }, []);
  const errorClassName = "border-red-400 border";

  return (
    <div className="flex flex-col font-gamja gap-0.5 w-full">
      <label htmlFor={props.name} className="text-xl">
        {labelText}
      </label>
      <div className="relative">
        <CustomInput
          {...props}
          type={inputType}
          className={twMerge(
            "rounded-xl w-full min-h-12 border-1 pl-2",
            error.length > 0 ? errorClassName : ""
          )}
          autoComplete={
            props.name === "password" ? `current-password` : "email"
          }
        />

        {props.type === "password" && (
          <CustomButton
            mode="icon"
            onClick={handleEyeClick}
            className="absolute right-2 top-3"
          >
            {inputType === "text" ? (
              <EyeIcon className="w-6 h-6 text-neutral-400 " />
            ) : (
              <EyeSlashIcon className="w-6 h-6 text-neutral-400  " />
            )}
          </CustomButton>
        )}
      </div>

      <p
        className={`mt-2 text-red-400 text-sm line-clamp-2 min-h-6 ${
          !!error ? "visible " : "invisible "
        }`}
      >
        {error}
      </p>
    </div>
  );
};

export default memo(FormInput);
