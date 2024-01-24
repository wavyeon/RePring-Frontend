import { useState } from "react";
import { CommentList } from "./CommentList";
import classes from "./MusicDetail.module.css";

export function MusicDetail({ music }) {
  return (
    <>
      <h1>{music.title}</h1>
      <div className={classes.div}>
        <img src={music.cover} alt={music.title} />
      </div>
      <CommentList />
    </>
  );
}
