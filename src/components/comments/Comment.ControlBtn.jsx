import { deleteComment } from "../../api/comments/comments";
import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../_common/buttons";
import { CustomModal } from "../_common/modal";

const CommentControlBtn = ({
  commentId,
  isUpdating,
  onUpdate,
  onCancel,
  setRenderTrigger,
}) => {
  const ErrorModal = useModal();
  const DeleteModal = useModal();
  const handleDelete = async () => {
    try {
      await deleteComment(commentId);
      setRenderTrigger((prev) => prev + 1);
    } catch (err) {
      ErrorModal.openModal();
    } finally {
      DeleteModal.closeModal();
    }
  };

  const handleUpdate = () => {
    onUpdate(DeleteModal.openModal);
  };

  const handleCancel = () => {
    onCancel();
    DeleteModal.closeModal();
  };

  return (
    <>
      <div className="flex gap-1 justify-baseline items-center">
        <CustomButton mode="text" onClick={handleUpdate}>
          {isUpdating ? "완료" : "수정"}
        </CustomButton>
        <CustomButton
          mode="text"
          className="text-error-100"
          onClick={DeleteModal.openModal}
        >
          삭제
        </CustomButton>
      </div>

      <CustomModal isOpen={DeleteModal.isOpen} onClose={DeleteModal.closeModal}>
        <div className="flex flex-col items-center gap-8 p-8 font-gamja min-w-2xs">
          <h1 className="text-3xl">❌ 삭제</h1>
          <p className="text-xl">삭제하시겠습니까?</p>
          <div className="flex items-center justify-between gap-8">
            <CustomButton mode="text" onClick={handleCancel} className="">
              취소
            </CustomButton>
            <CustomButton
              mode="text"
              onClick={handleDelete}
              className="w-12 text-xl text-error-200"
            >
              삭제
            </CustomButton>
          </div>
        </div>
      </CustomModal>
      <CustomModal isOpen={ErrorModal.isOpen} onClose={ErrorModal.closeModal}>
        <div className="flex flex-col items-center gap-8 p-8 font-gamja min-w-2xs">
          <h1 className="text-3xl">⚠️ 에러</h1>
          <p className="text-xl">댓글 삭제에 실패했습니다.</p>
          <CustomButton mode="button" onClick={ErrorModal.closeModal}>
            확인
          </CustomButton>
        </div>
      </CustomModal>
    </>
  );
};

export default CommentControlBtn;
