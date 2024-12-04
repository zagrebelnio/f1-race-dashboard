import classes from './StatCard.module.css';
import cupIcon from '../assets/cup.svg';

function StatCard({ title, data }) {
  return (
    <div className={classes.stat}>
      <div className={classes.statTitle}>
        <img src={cupIcon} alt="Stat icon" />
        <p>{title}</p>
      </div>
      <p className={classes.statValue}>{data}</p>
    </div>
  );
}

export default StatCard;
