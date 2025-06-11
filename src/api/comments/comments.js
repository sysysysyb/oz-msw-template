import { Comment } from "../config";
import { instance } from "../instance";
import { commentsDTO } from "./comments.dto";

// 댓글 가져오기 get
export const getComments = async () => {
  const response = await instance.get(Comment.default());
  return commentsDTO(response.data);
};

// 댓글 생성하기 post
export const createComment = async (newComment) => {
  await instance.post(Comment.default(), { content: newComment });
};

// 댓글 수정하기 patch
export const updateComment = async (commentId, newComment) => {
  await instance.patch(Comment.detail(commentId), { new_content: newComment });
};

// 댓글 삭제하기 delete
export const deleteComment = async (commentId) => {
  await instance.delete(Comment.detail(commentId));
};
