import classes from "./DriverCard.module.css";

function DriverCard({ driver }) {
  return (
    <div className={classes.card} style={{ borderColor: driver.team.color }}>
      <div className={classes.profile}>
        <div className={classes.info}>
          <p className={classes.abbreviation}>{driver.abbreviation}</p>
          <img
            className={classes.logo}
            src={driver.team.logo}
            alt="Team logo"
          />
          <p className={classes.number}>{driver.number}</p>
          <img className={classes.flag} src={driver.flag} alt="Driver flag" />
        </div>
        <img className={classes.img} src={driver.img} alt="Driver pic" />
      </div>
      <div className={classes.details}>
        <p>{driver.name}</p>
        <p>{driver.team.name}</p>
      </div>
    </div>
  );
}

export default DriverCard;
