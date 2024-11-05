import { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './Comparison.module.css';

function ComparisonPage() {
  const [seasons, setSeasons] = useState([]);
  const [season, setSeason] = useState(2024);

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
      </section>
    </>
  );
}

export default ComparisonPage;
