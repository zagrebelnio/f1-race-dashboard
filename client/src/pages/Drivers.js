import DriverCard from '../components/DriverCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSeason } from '../context/SeasonContext';
import classes from './Drivers.module.css';

function DriversPage() {
  const [drivers, setDrivers] = useState([]);
  const [name, setName] = useState('');
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

  const filteredDrivers = drivers.filter((driver) =>
    `${driver.firstName} ${driver.lastName}`
      .toLowerCase()
      .includes(name.toLowerCase())
  );

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
        <input
          type="text"
          placeholder="Enter name..."
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </section>
      <section className={classes.content}>
        {filteredDrivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </section>
    </>
  );
}

export default DriversPage;
