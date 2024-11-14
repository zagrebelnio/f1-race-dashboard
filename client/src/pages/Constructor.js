import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Constructor.module.css';
import defaultTeamLogo from '../assets/default-team.jpg';
import StatCard from '../components/StatCard';

function ConstructorPage() {
  const { id } = useParams();
  const [constructorData, setConstructorData] = useState({});

  useEffect(() => {
    const fetchConstructorStats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/constructors/${id}`
        );
        setConstructorData(response.data);
      } catch (error) {
        console.log('Error fetching constructor stats', error);
      }
    };
    fetchConstructorStats();
  }, [id]);

  return (
    <section className={classes.container}>
      <section className={classes.profile}>
        <img
          className={classes.profilePic}
          src={constructorData.logo ?? defaultTeamLogo}
          alt="Team logo"
        />
        <div className={classes.info}>
          <h1>{constructorData.name}</h1>
          <div className={classes.nationality}>
            <img
              className={classes.flag}
              src={`https://flagsapi.com/${constructorData.countryCode}/flat/64.png`}
              alt="Flag"
            />
            <p>{constructorData.countryName}</p>
          </div>
        </div>
      </section>
      <section className={classes.constructorStats}>
        <h2 className={classes.sectionTitle}>Constructor Stats</h2>
        <div className={classes.stats}>
          <StatCard
            title="Best Championship Position"
            data={constructorData.bestChampionshipPosition}
          />
          <StatCard
            title="Best Starting Grid Position"
            data={constructorData.bestStartingGridPosition}
          />
          <StatCard
            title="Best Race Result"
            data={constructorData.bestRaceResult}
          />
          <StatCard
            title="Championship Wins"
            data={constructorData.totalChampionshipWins}
          />
          <StatCard
            title="Race Entries"
            data={constructorData.totalRaceEntries}
          />
          <StatCard
            title="Race Starts"
            data={constructorData.totalRaceStarts}
          />
          <StatCard title="Race Wins" data={constructorData.totalRaceWins} />
          <StatCard
            title="1-2 Finishes"
            data={constructorData.total1And2Finishes}
          />
          <StatCard title="Race Laps" data={constructorData.totalRaceLaps} />
          <StatCard title="Podiums" data={constructorData.totalPodiums} />
          <StatCard title="Points" data={constructorData.totalPoints} />
          <StatCard
            title="Pole Positions"
            data={constructorData.totalPolePositions}
          />
          <StatCard
            title="Fastest Laps"
            data={constructorData.totalFastestLaps}
          />
        </div>
      </section>
    </section>
  );
}

export default ConstructorPage;
