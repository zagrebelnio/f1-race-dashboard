import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/api/drivers', async (req, res) => {
  const API_FORMULA_1_KEY = process.env.API_FORMULA_1_KEY;
  const season = req.query.season;

  try {
    const response = await axios.request({
      method: 'GET',
      url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
      params: {
        season: season,
      },
      headers: {
        'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
        'x-rapidapi-key': API_FORMULA_1_KEY,
      },
    });

    const drivers = response.data.response;

    const filteredDrivers = drivers.map((driver) => ({
      driver: driver.driver,
      team: driver.team,
    }));

    res.status(200).json(filteredDrivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
