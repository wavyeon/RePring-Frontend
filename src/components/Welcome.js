import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <div className={classes.content}>
      <h1>Welcome</h1>
      <button to='./newMusic'>
        <Link to='./newMusic'>새 음악</Link>
      </button>
    </div>
  );
}
