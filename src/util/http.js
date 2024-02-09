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
  const response = await axios({
    method: "get",
    url: "/api/music",
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  return response;
}

export async function deleteMusic(musicId) {
  const response = await axios({
    method: "delete",
    url: `/api/music/${musicId}`,
  });

  return await response.json();
}

// export async function getAllComment() {

  // return await response.json();
// }
