import { twMerge } from "tailwind-merge";

const TextArea = ({ className, ...props }) => {
  return (
    <textarea
      className={twMerge(
        "resize-none w-full h-full focus:outline-0",
        className
      )}
      autoFocus={props.autoFocus ?? true}
      {...props}
    />
  );
};

export default TextArea;
