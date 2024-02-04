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

  // if (!response.ok) {
  //   const error = new Error("An error occurred while creating the event");
  //   error.code = response.status;
  //   error.info = await response.json();
  //   throw error;
  // }

  return await response.json();
}

export async function getAllMusic() {
  const response = await axios({
    method: "get",
    url: "/api/music",
    headers: { "Content-Type": "application/json" },
  });

  // if (!response.ok) {
  //   const error = new Error("An error occurred while creating the event");
  //   error.code = response.status;
  //   error.info = await response.json();
  //   throw error;
  // }

  return await response.json();
}
