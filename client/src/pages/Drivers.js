import DriverCard from '../components/DriverCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSeason } from '../context/SeasonContext';
import classes from './Drivers.module.css';

const options = {
  teams: ['Red Bull', 'Mercedes', 'Ferrari', 'McLaren', 'Aston Martin'],
};

function DriversPage() {
  const [drivers, setDrivers] = useState([]);
  const { season, seasons, setSeason } = useSeason();

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/drivers?season=${season}`
        );
        console.log(response.data);
        setDrivers(response.data);
      } catch (error) {
        console.log('Error fetching drivers: ', error);
      }
    };
    fetchDrivers();
  }, [season]);

  return (
    <>
      <section className={classes.search}>
        <select
          name="season"
          id="season"
          onChange={(e) => setSeason(e.target.value)}
        >
          {seasons.map((season) => (
            <option key={season.year} value={season.year}>
              {season.year}
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
