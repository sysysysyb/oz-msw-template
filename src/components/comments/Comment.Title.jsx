import { twMerge } from "tailwind-merge";

const CommentTitle = ({ children, className }) => {
  return <h1 className={twMerge("text-4xl", className)}>{children}</h1>;
};

export default CommentTitle;
