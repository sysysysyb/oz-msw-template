import { useState } from "react";
import { updateComment } from "../../api/comments/comments";
import { useUserInfo } from "../../contexts/UserContext";
import { UserCard } from "../_common/userCard";
import { CustomTextArea } from "../_common/inputs";
import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../_common/buttons";
import CommentControlBtn from "./Comment.ControlBtn";
import { CustomModal } from "../_common/modal";

const CommentItem = ({ comment, setRenderTrigger }) => {
  const { userInfo } = useUserInfo();
  const ErrorModal = useModal();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [savedComment, setSavedComment] = useState(comment.content);
  const handleUpdateMode = () => {
    setIsUpdating((prev) => !prev);
  };
  const [newComment, setNewComment] = useState(comment.content);

  const handleComment = (event) => {
    setNewComment(event.target.value);
    setIsUpdated(true);
  };
  const handleUpdate = async (commentId, onDelete) => {
    handleUpdateMode();
    if (!isUpdated) {
      return;
    }

    if (!newComment) {
      onDelete();
      return;
    }
    try {
      await updateComment(commentId, newComment);
      setSavedComment(newComment);
      setRenderTrigger((prev) => prev + 1);
    } catch (err) {
      setNewComment(savedComment);
      ErrorModal.openModal();
    } finally {
      setIsUpdated(false);
    }
  };
  const handleCancel = () => {
    setIsUpdated(false);
    setNewComment(savedComment);
  };

  const onUpdate = (onDelete) => handleUpdate(comment.id, onDelete);

  return (
    <>
      <div>
        <div className="flex items-baseline justify-between">
          <UserCard userInfo={comment.author} />
          {userInfo.id === comment.author?.id && (
            <CommentControlBtn
              commentId={comment.id}
              isUpdating={isUpdating}
              onCancel={handleCancel}
              onUpdate={onUpdate}
              setRenderTrigger={setRenderTrigger}
            />
          )}
        </div>
        <div className="rounded-lg bg-gray-100 py-4 px-2  border-0">
          {isUpdating ? (
            <CustomTextArea
              name="comment-update"
              value={newComment}
              onChange={handleComment}
              className="resize-none w-full h-full bg-gray-100"
            />
          ) : (
            savedComment
          )}
        </div>
      </div>
      <CustomModal isOpen={ErrorModal.isOpen} onClose={ErrorModal.closeModal}>
        <div className="flex flex-col items-center gap-8 p-8 min-w-2xs font-gamja">
          <h1 className="text-3xl">⚠️ 에러</h1>
          <p className="text-xl">댓글 수정에 실패했습니다.</p>
          <CustomButton mode="button" onClick={ErrorModal.closeModal}>
            확인
          </CustomButton>
        </div>
      </CustomModal>
    </>
  );
};

export default CommentItem;
