import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "./MusicForm.module.css";

export function MusicForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    console.log(data.cover[0]);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("artist", data.artist);
    formData.append("cover", data.cover[0]);
    console.log(formData);
    try {
      // const url = "/api/music";
      // const body = formData;
      // const config = { headers: { "Content-Type": "multipart/form-data" } };
      // const response1 = await axios.post(url, body, config);
      // console.log(response1);

      const response2 = await axios({
        method: "post",
        url: "/api/music",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response2);

      setTimeout(() => {
        navigate("/library");
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("title", { required: true })} />
          <input type="text" {...register("artist", { required: true })} />
          {/* <input type="text" {...register("album", { required: true })} />
          <input type="text" {...register("id", { required: true })} /> */}
          <input
            type="file"
            accept="image/*"
            {...register("cover", { required: true })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
