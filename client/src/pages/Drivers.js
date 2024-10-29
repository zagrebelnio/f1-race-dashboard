import DriverCard from '../components/DriverCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './Drivers.module.css';

const options = {
  seasons: Array.from({ length: 75 }, (_, index) => 2024 - index),
  teams: ['Red Bull', 'Mercedes', 'Ferrari', 'McLaren', 'Aston Martin'],
};

function DriversPage() {
  const [drivers, setDrivers] = useState([]);
  const [season, setSeason] = useState(2024);

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
