import { useState } from "react";
import { TextField } from "@mui/material";

export function Comment({
  value,
  deleteCommentHandler,
  comments,
  setComments,
  cnt,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const attemptCommentEditHandler = (event) => {
    setIsEditing(!isEditing);
  };

  const completeCommentEditHandler = (event) => {
    event.preventDefault();
    const editedComments = comments.map((comment) => {
      if (comment === value) {
        comment = event.target[0].value;
        return comment;
      } else {
        return comment;
      }
    });
    setComments(editedComments);
    setIsEditing(!isEditing);
  };

  let editingComment;
  if (isEditing) {
    editingComment = (
      <>
        <form onSubmit={completeCommentEditHandler}>
          <input type="text" defaultValue={value} />
          <button type="submit">완료</button>
        </form>
      </>
    );
  } else {
    editingComment = (
      <>
        {value}
        <button onClick={attemptCommentEditHandler}>수정</button>
        <button onClick={() => deleteCommentHandler(value)}>삭제</button>
      </>
    );
  }
  console.log(cnt, value);
  return (
    <>
      <li key={cnt}>{editingComment}</li>
    </>
  );
}
