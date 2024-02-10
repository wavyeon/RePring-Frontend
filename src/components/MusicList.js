import { Link } from "react-router-dom";
import classes from "./MusicList.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMusic } from "../util/http";

// const dummy_music = [
//   {
//     title: "R.I.P",
//     artist: "Kid Milli",
//     id: 1,
//     cover: "/img/beige.jpg",
//   },
//   {
//     title: "요즘 같은 날",
//     artist: "ZENE THE ZILLA",
//     id: 2,
//     cover: "/img/commondays.jpg",
//   },
//   {
//     title: "NERD",
//     artist: "B.I",
//     id: 3,
//     cover: "/img/nerd.jpg",
//   },
//   {
//     title: "뭐",
//     artist: "쿠기",
//     id: 4,
//     cover: "/img/what.jpg",
//   },
// ];

export function MusicList() {
  const [musicList, setMusicList] = useState([]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["musics"],
    queryFn: getAllMusic
  })

  if(isPending) {
    console.log("쿼리중");
  }

  if(isError) {
    console.log(error.message);
  }

  if (musicList.length === 0) return <p>not yet</p>;

  if(data) {
    setMusicList(data);
  }

  return (
    <div>
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
    </div>
  );
}
