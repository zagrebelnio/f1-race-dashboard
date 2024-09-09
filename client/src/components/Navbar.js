import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
        <h1>Race Dashboard</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/drivers">Drivers</NavLink>
        <NavLink to="/constructors">Constructors</NavLink>
        <NavLink to="/standings">Standings</NavLink>
        <NavLink to="/results">Results</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
