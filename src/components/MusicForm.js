import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function MusicForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("submit")
    try {
      await axios({
        method: "post",
        url: "https://react-http-f1077-default-rtdb.firebaseio.com/music.json",
        data: {
          title: data.title,
          artist: data.artist,
          album: data.album,
          id: data.id,
          cover: data.cover,
        },
        config: { "Content-Type": "application/json" },
      });
      setTimeout(() => {
        navigate("/library");
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title", { required: true })} />
        <input type="text" {...register("artist", { required: true })} />
        <input type="text" {...register("album", { required: true })} />
        <input type="text" {...register("id", { required: true })} />
        <input type="file" accept="image/*" {...register("cover", { required: true })} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
