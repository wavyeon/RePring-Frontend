import { useState } from "react";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { deleteComment, editComment, queryClient } from "../util/http";
import classes from "../comment.module.css";

export function Comment({ commentId, context }) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    mutate: mutateEditComment,
    isPending: isEditCommentPending,
    isError: isEditCommentError,
    error: editCommentError,
  } = useMutation({
    mutationFn: editComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"], exact: false });
    },
  });

  const {
    mutate: mutateDeleteComment,
    isPending: isDeleteCommentPending,
    isError: isDeleteCommentError,
    error: deleteCommentError,
  } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"], exact: false });
    },
  });

  const attemptCommentEditHandler = (event) => {
    setIsEditing(!isEditing);
  };

  const completeCommentEditHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const response = mutateEditComment({
      commentId: commentId,
      commentInfo: event.target[0].value, // 나중엔 객체로
    });
    console.log(response);
    setIsEditing(!isEditing); // onSuccess에 넣어보기
  };

  const deleteCommentHandler = () => { // handler 안거치고 onClick에 mutate 할당해보기
    const response = mutateDeleteComment({ commentId });
    console.log(response);
  };

  let content;
  if (isEditing) {
    content = (
      <>
        <form onSubmit={completeCommentEditHandler}>
          <input type="text" defaultValue={context} />
          <button type="submit">완료</button>
        </form>
      </>
    );
  } else {
    content = (
      <>
        {context}
        <button onClick={attemptCommentEditHandler}>수정</button>
        <button onClick={deleteCommentHandler}>삭제</button>
      </>
    );
  }
  return (
    <>
      <li className={classes.comment} key={commentId}>{content}</li>
    </>
  );
}
