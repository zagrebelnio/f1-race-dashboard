import DriverCard from "../components/DriverCard";

import classes from "./Drivers.module.css";

const options = {
  seasons: [2024, 2023, 2022, 2021, 2020],
  teams: ["Red Bull", "Mercedes", "Ferrari", "McLaren", "Aston Martin"],
};

const drivers = [
  {
    id: 1,
    name: "Max VERSTAPPEN",
    number: 1,
    abbreviation: "VER",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/255px-Flag_of_the_Netherlands.svg.png",
    team: {
      logo: "https://stunodracing.net/index.php?attachments/redbull-racing-team-png.128674/",
      name: "Red Bull Racing",
      color: "#3671C6",
    },
    img: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/10col/image.png",
  },
  {
    id: 2,
    name: "Lewis HAMILTON",
    number: 44,
    abbreviation: "HAM",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    team: {
      logo: "https://www.formula1points.com/images/constructors/mercedes.webp",
      name: "Mercedes",
      color: "#6CD3BF",
    },
    img: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png",
  },
  {
    id: 3,
    name: "Charles LECLERC",
    number: 16,
    abbreviation: "LEC",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/640px-Flag_of_Monaco.svg.png",
    team: {
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Ferrari-Scuderia-Logo-700x394.png",
      name: "Ferrari",
      color: "#DC2E29",
    },
    img: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png",
  },
  {
    id: 4,
    name: "Carlos SAINZ",
    number: 55,
    abbreviation: "SAI",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
    team: {
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Ferrari-Scuderia-Logo-700x394.png",
      name: "Ferrari",
      color: "#DC2E29",
    },
    img: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png",
  },
  {
    id: 5,
    name: "Lando NORRIS",
    number: 4,
    abbreviation: "NOR",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    team: {
      logo: "https://www.svgrepo.com/show/446897/mclaren.svg",
      name: "McLaren",
      color: "#FF8700",
    },
    img: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png",
  },
  {
    id: 6,
    name: "George RUSSELL",
    number: 63,
    abbreviation: "RUS",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    team: {
      logo: "https://www.formula1points.com/images/constructors/mercedes.webp",
      name: "Mercedes",
      color: "#6CD3BF",
    },
    img: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png",
  },
  {
    id: 7,
    name: "Oscar PIASTRI",
    number: 81,
    abbreviation: "PIA",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    team: {
      logo: "https://www.svgrepo.com/show/446897/mclaren.svg",
      name: "McLaren",
      color: "#FF8700",
    },
    img: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png",
  },
  {
    id: 8,
    name: "Sergio PEREZ",
    number: 11,
    abbreviation: "PER",
    flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5SPcWCpG5550qdqfl5EccvCmANBwIbVoSg&s",
    team: {
      logo: "https://stunodracing.net/index.php?attachments/redbull-racing-team-png.128674/",
      name: "Red Bull",
      color: "#3671C6",
    },
    img: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png",
  },
];

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
      <section className={classes.content}>
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </section>
    </>
  );
}

export default DriversPage;
