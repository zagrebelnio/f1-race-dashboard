import { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './Comparison.module.css';

function ComparisonPage() {
  const [seasons, setSeasons] = useState([]);
  const [season, setSeason] = useState(2024);
  const [type, setType] = useState('drivers');

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/seasons');
        setSeasons(response.data);
      } catch (error) {
        console.log('Error fetching seasons: ', error);
      }
    };
    fetchSeasons();
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/${type}?season=${season}`
        );
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching results: ', error);
      }
    };
    fetchResults();
  }, [season, type]);

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
        <label htmlFor="drivers">Drivers</label>
        <input
          type="radio"
          name="type"
          id="drivers"
          value="drivers"
          checked={type === 'drivers'}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="constructors">Constructors</label>
        <input
          type="radio"
          name="type"
          id="constructors"
          value="constructors"
          checked={type === 'constructors'}
          onChange={(e) => setType(e.target.value)}
        />
      </section>
      <section className={classes.content}></section>
    </>
  );
}

export default ComparisonPage;
