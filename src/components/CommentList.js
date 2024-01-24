import { Comment } from "./Comment";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import classes from "./CommentList.module.css"

let cnt = 0;

export function CommentList() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addCommentHandler = (event) => {
    setComments((prev) => {
      return [...prev, input];
    });
    setInput("");
    cnt++;
  };

  const deleteCommentHandler = (value) => {
    setComments(comments.filter((comment) => comment !== value));
  };

  let commentList;

  if (comments.length === 0) {
    commentList = <p>no comment yet.</p>;
  } else {
    commentList = comments.map((comment) => {
      return (
        <Comment
          value={comment}
          deleteCommentHandler={deleteCommentHandler}
          setComments={setComments}
          comments={comments}
          cnt={cnt}
        />
      );
    });
  }
  return (
    <div>
      <ul>{commentList}</ul>
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
