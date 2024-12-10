import { useEffect, useState } from 'react';
import classes from './Results.module.css';
import ResultsTable from '../components/ResultsTable.js';
import SectionButton from '../components/SectionButton.js';
import { useSeason } from '../context/SeasonContext.js';
import axios from 'axios';

function ResultsPage() {
  const { season, seasons, setSeason } = useSeason();

  const [round, setRound] = useState(1);
  const [rounds, setRounds] = useState([]);
  const [results, setResults] = useState([]);
  const [type, setType] = useState('race');

  useEffect(() => {
    const fetchRounds = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/rounds?season=${season}`
        );
        setRounds(response.data);
      } catch (error) {
        console.log('Error fetching rounds: ', error);
      }
    };
    fetchRounds();
  }, [season, round, type]);

  useEffect(() => {
    const fetchResults = async () => {
      let session = type;
      let practice = '';
      if (type.includes('fp')) {
        session = 'practice';
        practice = type.slice(-1);
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/api/results/${session}?season=${season}&round=${round}&practice=${practice}`
        );
        console.log(response.data);
        setResults(response.data);
      } catch (error) {
        console.log('Error fetching results: ', error);
      }
    };
    fetchResults();
  }, [type, season, round]);

  return (
    <div className={classes.mainSection}>
      <section className={classes.search}>
        <div>
          <SectionButton
            isSelected={type === 'fp1'}
            onClick={() => setType('fp1')}
          >
            FP1
          </SectionButton>
          <SectionButton
            isSelected={type === 'fp2'}
            onClick={() => setType('fp2')}
          >
            FP2
          </SectionButton>
          <SectionButton
            isSelected={type === 'fp3'}
            onClick={() => setType('fp3')}
          >
            FP3
          </SectionButton>
          <SectionButton
            isSelected={type === 'qualifying'}
            onClick={() => setType('qualifying')}
          >
            Qualifying
          </SectionButton>
          <SectionButton
            isSelected={type === 'race'}
            onClick={() => setType('race')}
          >
            Race
          </SectionButton>
        </div>
        <select
          name="races"
          id="races"
          value={round}
          onChange={(e) => setRound(e.target.value)}
        >
          {rounds.map((round) => (
            <option key={round.round} value={round.round}>
              {round.name}
            </option>
          ))}
        </select>
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
        <ResultsTable type={type} />
      </section>
    </div>
  );
}

export default ResultsPage;
