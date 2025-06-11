import { useEffect, useState } from "react";
import { getComments } from "../../api/comments/comments";
import { useUserInfo } from "../../contexts/UserContext";
import CommentCreate from "./Comment.create";
import CommentItemList from "./Comment.ItemList";
import CommentTitle from "./Comment.Title";
import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../_common/buttons";
import { CustomModal } from "../_common/modal";

export const Comments = () => {
  const { userInfo } = useUserInfo();
  const ConfirmModal = useModal();
  const [comments, setComments] = useState([]);
  const [renderTrigger, setRenderTrigger] = useState(0);
  useEffect(() => {
    const handleGetComments = async () => {
      try {
        const response = await getComments();

        setComments(response);
      } catch (err) {
        console.log(err);
        ConfirmModal.openModal();
      }
    };
    handleGetComments();
  }, [renderTrigger]);

  console.dir(comments);
  return (
    <>
      <section className="mx-24 sm:mx-32 md:mx-40 lg:mx-56 mt-10 pb-20 font-gamja">
        <CommentTitle>댓글({comments?.length ?? 0})</CommentTitle>
        <CommentItemList
          commentList={comments}
          setRenderTrigger={setRenderTrigger}
        />
        {userInfo.isLoggedIn && (
          <CommentCreate setRenderTrigger={setRenderTrigger} />
        )}
      </section>

      <CustomModal
        onClose={ConfirmModal.closeModal}
        isOpen={ConfirmModal.isOpen}
      >
        <div className="flex flex-col items-center gap-8 p-8 font-gamja">
          <h1 className="text-3xl">⚠️ 에러</h1>
          <p className="text-xl">댓글을 불러오는데 실패했습니다.</p>
          <CustomButton mode="button" onClick={ConfirmModal.closeModal}>
            확인
          </CustomButton>
        </div>
      </CustomModal>
    </>
  );
};
