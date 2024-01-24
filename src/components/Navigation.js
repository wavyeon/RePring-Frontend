import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

export function Navigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/library"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Library
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}