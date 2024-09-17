import classes from "./ConstructorCard.module.css";

function ConstructorCard({ team }) {
  return (
    <div className={classes.card} style={{ borderColor: team.color }}>
      <div className={classes.info}>
        <img className={classes.logo} src={team.logo} alt={team.name} />
      </div>
      <div className={classes.details}>
        <p>{team.name}</p>
      </div>
    </div>
  );
}

export default ConstructorCard;
