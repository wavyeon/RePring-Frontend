import { Link } from "react-router-dom";
import classes from "./MusicList.module.css";
import { useSelector } from "react-redux";
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
      const musicListObject = await axios.get('https://react-http-f1077-default-rtdb.firebaseio.com/music.json')
      return musicListObject.data;
    }
    getMusicList().then(result => {
      // if(!result) return;
      const musicList = Object.values(result);
      setMusicList(musicList);
    });
  }, []);

  if(musicList.length === 0) return <p>not yet</p>;

  return (
    <test>
      <ul>
        {dummy_music.map((music) => (
          <li id={music.id} className={classes.test}>
            <Link to={`/library/${music.id}`} state={{music}}>
              <h2>{music.title + '-' + music.artist}</h2>
              <img src={music.cover} alt={music.title}/>
            </Link>
          </li>
        ))}
      </ul>
    </test>
  );
}
