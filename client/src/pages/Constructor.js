import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Constructor.module.css';
import defaultTeamLogo from '../assets/default-team.jpg';
import cupIcon from '../assets/cup.svg';

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
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Best Championship Position</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.bestChampionshipPosition}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Best Starting Grid Position</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.bestStartingGridPosition}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Best Race Result</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.bestRaceResult}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Championship Wins</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.totalChampionshipWins}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Entries</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.totalRaceEntries}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Starts</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.totalRaceStarts}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Wins</p>
            </div>
            <p className={classes.statValue}>{constructorData.totalRaceWins}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>1-2 Finishes</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.total1And2Finishes}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Race Laps</p>
            </div>
            <p className={classes.statValue}>{constructorData.totalRaceLaps}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Podiums</p>
            </div>
            <p className={classes.statValue}>{constructorData.totalPodiums}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Points</p>
            </div>
            <p className={classes.statValue}>{constructorData.totalPoints}</p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Pole Positions</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.totalPolePositions}
            </p>
          </div>
          <div className={classes.stat}>
            <div className={classes.statTitle}>
              <img src={cupIcon} alt="Stat icon" />
              <p>Fastest Laps</p>
            </div>
            <p className={classes.statValue}>
              {constructorData.totalFastestLaps}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ConstructorPage;
