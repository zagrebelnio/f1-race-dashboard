import ConstructorCard from "../components/ConstructorCard";

import classes from "./Constructors.module.css";

const options = {
  seasons: [2024, 2023, 2022, 2021, 2020],
};

const teams = [
  {
    id: 1,
    name: "Red Bull",
    color: "#3671C6",
    logo: "https://stunodracing.net/index.php?attachments/redbull-racing-team-png.128674/",
  },
  {
    id: 2,
    name: "McLaren",
    color: "#FF8700",
    logo: "https://www.svgrepo.com/show/446897/mclaren.svg",
  },
  {
    id: 3,
    name: "Ferrari",
    color: "#DC0000",
    logo: "https://logos-world.net/wp-content/uploads/2020/07/Ferrari-Scuderia-Logo-700x394.png",
  },
  {
    id: 4,
    name: "Mercedes",
    color: "#6CD3BF",
    logo: "https://www.formula1points.com/images/constructors/mercedes.webp",
  },
  {
    id: 5,
    name: "Aston Martin",
    color: "#037A68",
    logo: "https://cdn.motor1.com/images/mgl/3WWeox/s1/aston-martin-new-logo.jpg",
  },
  {
    id: 6,
    name: "VCARB",
    color: "#6692FF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/VCARB_F1_logo.svg/1200px-VCARB_F1_logo.svg.png",
  },
  {
    id: 7,
    name: "Haas",
    color: "#B6BABD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo_Haas_F1.png",
  },
  {
    id: 8,
    name: "Williams",
    color: "#00A0DE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Logo_Williams_F1.png",
  },
];

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
      <section className={classes.content}>
        {teams.map((team) => (
          <ConstructorCard key={team.id} team={team} />
        ))}
      </section>
    </>
  );
}

export default ConstructorsPage;
