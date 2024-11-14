import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './Driver.module.css';
import { useEffect, useState } from 'react';
import defaultDriverImage from '../assets/default-driver.png';
import cupIcon from '../assets/cup.svg';

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
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Best Championship Position</p>
            </div>
            <p className={classes.statValue}>
              {driverData.bestChampionshipPosition}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Best Starting Grid Position</p>
            </div>
            <p className={classes.statValue}>
              {driverData.bestStartingGridPosition}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Best Race Result</p>
            </div>
            <p className={classes.statValue}>{driverData.bestRaceResult}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Championship Wins</p>
            </div>
            <p className={classes.statValue}>
              {driverData.totalChampionshipWins}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Entries</p>
            </div>
            <p className={classes.statValue}>{driverData.totalRaceEntries}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Starts</p>
            </div>
            <p className={classes.statValue}>{driverData.totalRaceStarts}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Wins</p>
            </div>
            <p className={classes.statValue}>{driverData.totalRaceWins}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Laps</p>
            </div>
            <p className={classes.statValue}>{driverData.totalRaceLaps}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Podiums</p>
            </div>
            <p className={classes.statValue}>{driverData.totalPodiums}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Points</p>
            </div>
            <p className={classes.statValue}>{driverData.totalPoints}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Pole Positions</p>
            </div>
            <p className={classes.statValue}>{driverData.totalPolePositions}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Fastest Laps</p>
            </div>
            <p className={classes.statValue}>{driverData.totalFastestLaps}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Driver of the Day</p>
            </div>
            <p className={classes.statValue}>
              {driverData.totalDriverOfTheDay}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Grand Slams</p>
            </div>
            <p className={classes.statValue}>{driverData.totalGrandSlams}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DriverPage;
