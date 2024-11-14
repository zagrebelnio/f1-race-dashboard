import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Constructor.module.css';
import defaultTeamLogo from '../assets/default-team.jpg';

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
    </section>
  );
}

export default ConstructorPage;
