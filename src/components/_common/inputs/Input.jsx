import { twMerge } from "tailwind-merge";

const Input = ({ value, onChange, className, ...rest }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={twMerge("", className)}
      {...rest}
    />
  );
};

export default Input;
