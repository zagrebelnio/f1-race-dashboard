import ConstructorCard from '../components/ConstructorCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Constructors.module.css';

const options = {
  seasons: Array.from({ length: 75 }, (_, index) => 2024 - index),
};

function ConstructorsPage() {
  const [teams, setTeams] = useState([]);
  const [season, setSeason] = useState(2024);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/constructors?season=${season}`
        );
        setTeams(response.data);
      } catch (error) {
        console.log('Error fetching teams: ', error);
      }
    };
    fetchTeams();
  }, [season]);

  return (
    <>
      <section className={classes.search}>
        <select
          name="season"
          id="season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
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
