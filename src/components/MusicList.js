import { Link } from "react-router-dom";
import classes from "./MusicList.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const dummy_music = [
  {
    title: "R.I.P",
    artist: "Kid Milli",
    id: 1,
    cover: "/img/beige.jpg",
  },
  {
    title: "요즘 같은 날",
    artist: "ZENE THE ZILLA",
    id: 2,
    cover: "/img/commondays.jpg",
  },
];

export function MusicList() {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const getMusicList = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/music",
        })
        console.log(response.data);
        console.log(Object.values(response.data));
      }
      catch (error) {
        alert(error.message);
      };
    }
    getMusicList();
  }, []);

  if(dummy_music.length === 0) return <p>not yet</p>;

  return (
    <div>
      <ul className={classes["list-group"]}>
        {dummy_music.map((music) => (
          <li id={music.id} className={classes["list-each"]}>
            <Link to={`/library/${music.id}`} state={{music}}>
              <h2>{music.title + '-' + music.artist}</h2>
              <img src={music.cover} alt={music.title} className={classes["list-each-image"]}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
