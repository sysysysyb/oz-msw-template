import { twMerge } from "tailwind-merge";
import CommentItem from "./Comment.Item";

const CommentItemList = ({
  commentList,
  containerClassName,
  setRenderTrigger,
}) => {
  return (
    <div className={twMerge("flex flex-col gap-2", containerClassName)}>
      {commentList?.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          setRenderTrigger={setRenderTrigger}
        />
      ))}
    </div>
  );
};

export default CommentItemList;
