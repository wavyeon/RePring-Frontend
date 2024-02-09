import { useState } from "react";
import { CommentList } from "./CommentList";
import classes from "./MusicDetail.module.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteMusic } from "../util/http";
import { queryClient } from "../util/http";

export function MusicDetail({ music }) {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteMusic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['musics'], exact: false});
      setTimeout(() => {
        navigate("/library");
      }, 1000);
    }
  });

  return (
    <>
      <h1>{music.title}</h1>
      <div className={classes.div}>
        <img src={music.cover} alt={music.title} />
      </div>
      <button onClick={() => mutate(music.id)}></button>
      <CommentList />
    </>
  );
}
