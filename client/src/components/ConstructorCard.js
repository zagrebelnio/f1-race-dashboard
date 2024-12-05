import logo from '../assets/default-team.jpg';
import classes from './ConstructorCard.module.css';
import { NavLink } from 'react-router-dom';

function ConstructorCard({ team }) {
  return (
    <NavLink to={`/constructors/${team.id}`}>
      <div className={classes.card} style={{ borderColor: team.color }}>
        <div className={classes.info}>
          <img
            className={classes.logo}
            src={team.logo ?? logo}
            alt={team.name}
          />
        </div>
        <div className={classes.details}>
          <p>{team.name}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default ConstructorCard;
