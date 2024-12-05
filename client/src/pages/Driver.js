import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './Driver.module.css';
import { useEffect, useState } from 'react';
import defaultDriverImage from '../assets/default-driver.png';
import StatCard from '../components/StatCard';

function DriverPage() {
  const { id } = useParams();
  const [driverData, setDriverData] = useState({});

  useEffect(() => {
    const fetchDriverCareerStats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/drivers/${id}`
        );
        setDriverData(response.data);
      } catch (error) {
        console.log('Error fetching driver career stats', error);
      }
    };
    fetchDriverCareerStats();
  }, [id]);

  return (
    <section className={classes.container}>
      <section className={classes.profile}>
        <img
          className={classes.profilePic}
          src={driverData.image ?? defaultDriverImage}
          alt="Driver profile"
        />
        <div className={classes.info}>
          <h1>{driverData.name}</h1>
          <div className={classes.nationality}>
            <img
              className={classes.flag}
              src={`https://flagsapi.com/${driverData.countryCode}/flat/64.png`}
              alt="Flag"
            />
            <p>{driverData.countryName}</p>
          </div>
          <p>{driverData.abbreviation}</p>
          <p>{driverData.number ?? 'N/A'}</p>
          <p>
            {new Date(driverData.dateOfBirth).toLocaleDateString('en-GB')} -{' '}
            {driverData.dateOfDeath
              ? new Date(driverData.dateOfDeath).toLocaleDateString('en-GB')
              : 'present'}
          </p>
        </div>
      </section>
      <section className={classes.careerStats}>
        <h2 className={classes.sectionTitle}>Career Stats</h2>
        <div className={classes.stats}>
          <StatCard
            title="Best Championship Position"
            data={driverData.bestChampionshipPosition}
          />
          <StatCard
            title="Best Starting Grid Position"
            data={driverData.bestStartingGridPosition}
          />
          <StatCard title="Best Race Result" data={driverData.bestRaceResult} />
          <StatCard
            title="Championship Wins"
            data={driverData.totalChampionshipWins}
          />
          <StatCard title="Race Entries" data={driverData.totalRaceEntries} />
          <StatCard title="Race Starts" data={driverData.totalRaceStarts} />
          <StatCard title="Race Wins" data={driverData.totalRaceWins} />
          <StatCard title="Race Laps" data={driverData.totalRaceLaps} />
          <StatCard title="Podiums" data={driverData.totalPodiums} />
          <StatCard title="Points" data={driverData.totalPoints} />
          <StatCard
            title="Pole Positions"
            data={driverData.totalPolePositions}
          />
          <StatCard title="Fastest Laps" data={driverData.totalFastestLaps} />
          <StatCard
            title="Driver of the Day"
            data={driverData.totalDriverOfTheDay}
          />
          <StatCard title="Grand Slams" data={driverData.totalGrandSlams} />
        </div>
      </section>
    </section>
  );
}

export default DriverPage;
