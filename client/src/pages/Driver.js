import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './Driver.module.css';
import { useEffect, useState } from 'react';
import defaultDriverImage from '../assets/default-driver.png';

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
    <>
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
            {driverData.dateOfDeath ?? 'present'}
          </p>
        </div>
      </section>
      <h1>Driver Page for Driver {id}</h1>
      <div className={classes.driverData}>
        {Object.entries(driverData).map(([key, value]) => (
          <div key={key} className={classes.dataItem}>
            <strong>{key}:</strong> {value !== null ? value : 'N/A'}
          </div>
        ))}
      </div>
    </>
  );
}

export default DriverPage;
