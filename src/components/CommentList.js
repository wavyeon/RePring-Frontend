import { Comment } from "./Comment";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import classes from "./CommentList.module.css";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getAllComment, createNewComment, queryClient } from "../util/http";

export function CommentList() {
  const [input, setInput] = useState("");
  const params = useParams();

  const {
    data: comments,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments", params.musicId],
    queryFn: () => getAllComment({musicId: params.musicId}),
  });

  const {
    mutate: mutateCreateComment,
    isPending: isCreateCommentPending,
    isError: isCreateCommentError,
    error: createCommentError,
  } = useMutation({
    mutationFn: createNewComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"], exact: false });
    },
  });

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addCommentHandler = () => {
    const response = mutateCreateComment({
      musicId: params.musicId,
      commentInfo: input,
    });
    console.log(response);
    setInput("");
  };

  let content;  

  if (isError) {
    console.log(error.message);
  }

  if (comments) {
    content = comments.map((comment) => {
      return (
        <Comment
          commentId={comment.id}
          text={comment.content}
          // onDelete={deleteCommentHandler.bind(null, params.musicId, comment.id)}
          // onDelete={() => deleteCommentHandler({musicId: params.musicId, commentId: comment.id})}
        />
      );
    });
  }

  return (
    <div>
      <ul>{content}</ul>
      <TextField
        // onClick={isLogin}
        onChange={inputChangeHandler}
        multiline
        placeholder="댓글을 입력해주세요✏️"
        value={input}
      />
      {input !== "" ? (
        <Button variant="outlined" onClick={addCommentHandler}>
          등록하기
        </Button>
      ) : (
        <Button variant="outlined" disabled={true}>
          등록하기
        </Button>
      )}
    </div>
  );
}
