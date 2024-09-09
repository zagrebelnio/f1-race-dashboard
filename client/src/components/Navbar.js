import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <img src={logo} alt="Logo" />
            <h1>Race Dashboard</h1>
          </div>
          <div className={classes.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/drivers"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Drivers
            </NavLink>
            <NavLink
              to="/constructors"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Constructors
            </NavLink>
            <NavLink
              to="/standings"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Standings
            </NavLink>
            <NavLink
              to="/results"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Results
            </NavLink>
          </div>
        </nav>
      </header>
      <h1>bla bla bla</h1>
    </>
  );
}

export default Navbar;
