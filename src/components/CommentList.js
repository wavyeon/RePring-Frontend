import { Comment } from "./Comment";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import classes from "./CommentList.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export function CommentList() {
  const [comments, setComments] = useState([
    {
      text: "쌌다",
      id: 1,
    },
    {
      text: "김선 감성 모르면 나가라",
      id: 2,
    }
  ]);
  const [input, setInput] = useState("");
  const params = useParams();

  useEffect(() => {
   const getComment = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `/api/music/${params.musicId}/comments`,
        config: { headers: { 'Content-Type': 'application/json' } },
      });
      console.log(response.data);
      // setComments(response.data.comments);
    } catch (error) {
      // alert(error.message);
    }
   }
   getComment();
  });

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addCommentHandler = async (event) => {
    setComments((prev) => {
      return [...prev, input];
    });

    //백엔드 연결 시
    const response = await axios({
      method: "post",
      url: `/api/music/${params.musicId}/comments`,
      config: { headers: { "Content-Type": "application/json" } },
    })
    console.log(response);

    setInput("");
  };

  const deleteCommentHandler = async (text, id) => {
    setComments(comments.filter((comment) => comment.id !== id));

    //백엔드 연결 시
    const response = await axios({
      method: "delete",
      url: `/api/music/${params.musicId}/comments/${id}`,
      config: { headers: { "Content-Type": "application/json" } },
    })
    console.log(response);
  };

  let commentList;

  if (comments.length === 0) {
    commentList = <p>no comment yet.</p>;
  } else {
    commentList = comments.map((comment) => {
      return (
        <Comment
          value={comment.text}
          deleteCommentHandler={() => deleteCommentHandler(comment.text, comment.id)}
          setComments={setComments}
          comments={comments}
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
