import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <div className={classes.div}>
      <h2>Curration</h2>
      <button to='./newMusic'>
        <Link to='./newMusic'>New Music</Link>
      </button>
    </div>
  );
}
