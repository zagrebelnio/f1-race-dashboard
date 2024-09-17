import classes from "./Constructors.module.css";

const options = {
  seasons: [2024, 2023, 2022, 2021, 2020],
};

function ConstructorsPage() {
  return (
    <>
      <section className={classes.search}>
        <select>
          {options.seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Enter name..." />
      </section>
      <section></section>
    </>
  );
}

export default ConstructorsPage;
