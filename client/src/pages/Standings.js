import { useState, useEffect } from 'react';
import classes from './Standings.module.css';
import StandingsTable from '../components/StandingsTable.js';
import SectionButton from '../components/SectionButton';
import { useSeason } from '../context/SeasonContext';
import axios from 'axios';

function StandingsPage() {
  const [type, setType] = useState('drivers');
  const { season, seasons, setSeason } = useSeason();
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/standings/${type}?season=${season}`
        );
        setStandings(response.data);
      } catch (error) {
        console.log('Error fetching standings: ', error);
      }
    };
    fetchStandings();
  }, [type, season]);

  return (
    <div className={classes.mainSection}>
      <section className={classes.search}>
        <div>
          <SectionButton
            onClick={() => setType('drivers')}
            isSelected={type === 'drivers'}
          >
            Drivers
          </SectionButton>
          <SectionButton
            onClick={() => setType('constructors')}
            isSelected={type === 'constructors'}
          >
            Constructors
          </SectionButton>
        </div>
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
      </section>
      <section className={classes.content}>
        <StandingsTable data={standings} type={type} />
      </section>
    </div>
  );
}

export default StandingsPage;
