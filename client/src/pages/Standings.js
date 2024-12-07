import { useState } from 'react';
import classes from './Standings.module.css';
import StandingsTable from '../components/StandingsTable.js';
import SectionButton from '../components/SectionButton';
import { useSeason } from '../context/SeasonContext';

function StandingsPage() {
  const [activeButton, setActiveButton] = useState('drivers');
  const { season, seasons, setSeason } = useSeason();

  return (
    <div className={classes.mainSection}>
      <section className={classes.search}>
        <div>
          <SectionButton
            onClick={() => setActiveButton('drivers')}
            isSelected={activeButton === 'drivers'}
          >
            Drivers
          </SectionButton>
          <SectionButton
            onClick={() => setActiveButton('constructors')}
            isSelected={activeButton === 'constructors'}
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
        <StandingsTable type={activeButton} />
      </section>
    </div>
  );
}

export default StandingsPage;
