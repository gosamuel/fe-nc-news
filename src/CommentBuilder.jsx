import { useState } from "react";
import { sendComment } from "../utils/api";

function CommentBuilder({
  article_id,
  currentUser,
  setComments,
  newComment,
  setNewComment,
  comments,
}) {
  const [commentBody, setCommentBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newComment = { author: currentUser, body: commentBody };

    setComments((currComments) => {
      return [newComment, ...currComments];
    });
    sendComment(currentUser, commentBody, article_id);
    setCommentBody("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Commenting as {currentUser}...</label>
      <textarea
        rows="4"
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
      ></textarea>

      <button type="submit">Add Comment</button>
    </form>
  );
}
export default CommentBuilder;
