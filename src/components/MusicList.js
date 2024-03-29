import { Link } from "react-router-dom";
import classes from "./MusicList.module.css";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMusic } from "../util/http";

export function MusicList() {
  const { data: musicList, isPending, isError, error } = useQuery({
    queryKey: ["musics"],
    queryFn: getAllMusic,
  })

  let content;

  if(isPending) {
    content = <p>쿼리 중</p>
  }

  if(isError) {
    console.log(error.message);
  }

  if(musicList &&
    musicList.length > 0) {
    content = (
      <ul className={classes["list"]}>
        {musicList.map((music) => (
          <div className={classes["card"]}>
            <Link
              to={`/library/${music.id}`}
              state={{ music }}
            >
              <li id={music.id} className={classes["list-item"]}>
                <h2 className={classes["list-item-text"]}>{music.title}</h2>
                <h3 className={classes["list-item-text"]}>{music.artist}</h3>
                <img
                  src={`/api/music/image/${music.id}`}
                  alt={music.title}
                  className={classes["list-each-image"]}
                />
              </li>
            </Link>
          </div>
        ))}
      </ul>
    )
  }

  return (
    <div>
      {content}
    </div>
  );
}
