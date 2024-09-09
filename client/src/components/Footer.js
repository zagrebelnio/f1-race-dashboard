import logo from "../assets/logo.svg";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <hr />
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
        <h1>Race Dashboard</h1>
      </div>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
