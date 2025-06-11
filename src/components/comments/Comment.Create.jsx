import { memo, useState } from "react";
import { CustomButton } from "../_common/buttons";
import { CustomTextArea } from "../_common/inputs";
import { createComment } from "../../api/comments/comments";

const CommentCreate = ({ setRenderTrigger }) => {
  const [commentContent, setCommentContent] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleCommentChange = (event) => {
    setIsValid(!!event.target.value);
    setCommentContent(event.target.value);
  };
  const onSubmit = async () => {
    await createComment(commentContent);
    setRenderTrigger((prev) => prev + 1);
    setCommentContent("");
  };

  return (
    <div className="mt-4 flex flex-col gap-1.5">
      <h1 className="text-xl">댓글 작성</h1>
      <CustomTextArea
        id="comment"
        name="comment"
        autoFocus={false}
        className="bg-gray-200 rounded-lg focus:outline-0 p-4 w-full"
        value={commentContent}
        onChange={handleCommentChange}
      />

      <div className="flex justify-end">
        <CustomButton mode="text" disabled={!isValid} onClick={onSubmit}>
          저장
        </CustomButton>
      </div>
    </div>
  );
};

export default memo(CommentCreate);
