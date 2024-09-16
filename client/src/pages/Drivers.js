import classes from "./Drivers.module.css";

const options = {
  seasons: [2024, 2023, 2022, 2021, 2020],
  teams: ["Red Bull", "Mercedes", "Ferrari", "McLaren", "Aston Martin"],
};

function DriversPage() {
  return (
    <>
      <section className={classes.search}>
        <select name="season" id="season">
          {options.seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Enter name..." id="name" />
        <select name="team" id="team">
          {options.teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </section>
      <section></section>
    </>
  );
}

export default DriversPage;
