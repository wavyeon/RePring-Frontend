import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const queryClient = new QueryClient();

export async function createNewMusic(formData) {
  try {
    await axios({
      method: "post",
      url: "/api/music",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    alert(error.message);
  }
}

export async function getAllMusic() {
  try {
    const response = await axios({
      method: "get",
      url: "/api/music",
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}