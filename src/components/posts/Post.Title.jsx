import { twMerge } from "tailwind-merge";

const PostTitle = ({ children, className }) => {
  return <h1 className={twMerge("text-5xl", className)}>{children}</h1>;
};

export default PostTitle;
