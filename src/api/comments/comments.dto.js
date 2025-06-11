export const commentsDTO = (rawData) =>
  rawData.comments.map((comment) => ({
    id: comment.comment_id,
    content: comment.content,
    author: {
      id: comment.author.user_id,
      username: comment.author.username,
    },
  }));
