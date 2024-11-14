import classes from './DriverCard.module.css';
import logo from '../assets/logo.svg';
import defaultDriverImage from '../assets/default-driver.png';
import { NavLink } from 'react-router-dom';

function DriverCard({ driver }) {
  return (
    <NavLink to={`/drivers/${driver.id}`}>
      <div
        id={driver.id}
        className={classes.card}
        style={{ borderColor: driver.team.color }}
      >
        <div className={classes.profile}>
          <div className={classes.info}>
            <p className={classes.abbreviation}>{driver.abbr}</p>
            <img
              className={classes.logo}
              src={driver.team.logo ?? logo}
              alt="Team logo"
            />
            <p className={classes.number}>{driver.number ?? 'N/A'}</p>
            <img
              className={classes.flag}
              src={`https://flagsapi.com/${driver.countryCode}/flat/64.png`}
              alt="Driver flag"
            />
          </div>
          <img
            className={classes.img}
            src={driver.image ?? defaultDriverImage}
            alt="Driver pic"
          />
        </div>
        <div className={classes.details}>
          <p>
            {driver.firstName} {driver.lastName}
          </p>
          <p>{driver.team.name}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default DriverCard;
