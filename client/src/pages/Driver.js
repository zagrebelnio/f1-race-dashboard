import { useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './Driver.module.css';
import { useEffect, useState } from 'react';

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
