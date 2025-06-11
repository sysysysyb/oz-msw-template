import { twMerge } from "tailwind-merge";

const PostDescription = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "text-2xl font-extralight whitespace-normal",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PostDescription;
