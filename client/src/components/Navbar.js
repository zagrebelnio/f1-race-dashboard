import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import classes from './Navbar.module.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          <h1>Race Dashboard</h1>
        </div>
        <button
          className={classes.menuToggle}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>
        <div
          className={`${classes.links} ${
            isMobileMenuOpen ? classes.active : ''
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/drivers"
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Drivers
          </NavLink>
          <NavLink
            to="/constructors"
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Constructors
          </NavLink>
          <NavLink
            to="/standings"
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Standings
          </NavLink>
          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Results
          </NavLink>
          <NavLink
            to="/comparison"
            className={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Comparison
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
