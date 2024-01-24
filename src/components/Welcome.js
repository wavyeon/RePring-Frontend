import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

export function Welcome() {
  const clickHandler = () => {
    fetch("/prac")
    .then((res) => console.log(res));
    // .then((response) => response.json())
    // .then((result) => console.log(result));
  };
  return (
    <div className={classes.content}>
      <h1>Welcome</h1>
      <button to='./newMusic'>
        <Link to='./newMusic'>새 음악</Link>
      </button>
      <button onClick={clickHandler}>
        김장현용
      </button>
    </div>
  );
}
