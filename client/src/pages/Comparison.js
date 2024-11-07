import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import classes from './Comparison.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ComparisonPage() {
  const [seasons, setSeasons] = useState([]);
  const [season, setSeason] = useState(2024);
  const [type, setType] = useState('drivers');
  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [],
  });

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

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/comparisons/constructors?season=${season}`
        );
        const newData = {
          labels: response.data.labels,
          datasets: response.data.data.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.borderColor ?? '#000000',
            fill: false,
            tension: 0.1,
          })),
        };

        console.log(newData);
        setLineChartData(newData);
      } catch (error) {
        console.log('Error fetching comparisons data: ', error);
      }
    };
    fetchResults();
  }, [season]);

  return (
    <>
      <section className={classes.search}>
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
        <label htmlFor="drivers">Drivers</label>
        <input
          type="radio"
          name="type"
          id="drivers"
          value="drivers"
          checked={type === 'drivers'}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="constructors">Constructors</label>
        <input
          type="radio"
          name="type"
          id="constructors"
          value="constructors"
          checked={type === 'constructors'}
          onChange={(e) => setType(e.target.value)}
        />
      </section>
      <section className={classes.content}>
        <Line
          data={lineChartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                position: 'left',
                labels: {
                  font: {
                    size: 16,
                    family: 'Montserrat',
                  },
                },
              },
              title: {
                display: true,
                text: `Points progression for ${type} championship in ${season}`,
                font: {
                  size: 24,
                  family: 'Montserrat',
                },
              },
            },
          }}
          height={600}
        />
      </section>
    </>
  );
}

export default ComparisonPage;
