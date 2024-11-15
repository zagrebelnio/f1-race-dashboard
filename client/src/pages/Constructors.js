import ConstructorCard from '../components/ConstructorCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Constructors.module.css';
import { useSeason } from '../context/SeasonContext';

function ConstructorsPage() {
  const [teams, setTeams] = useState([]);
  const { season, seasons, setSeason } = useSeason();

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
          {seasons.map((season) => (
            <option key={season.year} value={season.year}>
              {season.year}
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
