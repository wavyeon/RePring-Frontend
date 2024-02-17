import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export async function createNewMusic(formData) {
  const response = await axios({
    method: "post",
    url: "/api/music",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response;
}

export async function getAllMusic() {
  const { data } = await axios({
    method: "get",
    url: "/api/music",
    headers: { "Content-Type": "application/json" },
  });
  console.log(data);
  return data;
}

export async function deleteMusic({ musicId }) {
  const response = await axios({
    method: "delete",
    url: `/api/music/${musicId}`,
  });

  return response;
}

export async function createNewComment({ musicId, commentInfo }) {
  const response = await axios({
    method: "post",
    url: `/api/music/comments/${musicId}`,
    data: commentInfo, // 일단은 입력한 댓글 내용만(string), 나중에는 다른 정보 포함해서 객체로 
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  return response;
}

export async function getAllComment({ musicId }) {
  const { data } = await axios({
    method: "get",
    url: `/api/music/comments/${musicId}`,
    headers: { "Content-Type": "application/json" },
  });
  console.log(data);
  return data;
}

export async function editComment({ commentId, commentInfo }) {
  const response = await axios({
    method: "put",
    url: `/api/music/comments/${commentId}`,
    data: commentInfo, // 일단은 입력한 댓글 내용만(string), 나중에는 다른 정보 포함해서 객체로 
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  return response;
}

export async function deleteComment({ commentId }) {
  const response = await axios({
    method: "delete",
    url: `/api/music/comments/${commentId}`,
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  return response;
}

