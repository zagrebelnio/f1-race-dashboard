import express from 'express';
import { getDriversStandings } from '../database/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const season = req.query.season;

    if (!season) {
      return res.status(400).json({ error: 'Season parameter is required' });
    }

    const rows = await getDriversStandings(season);

    const data = rows.map((row) => ({
      position: row.position,
      firstName: row.first_name,
      lastName: row.last_name,
      team: {
        name: row.team_name,
        color: row.team_color,
        logo: row.team_logo,
      },
      points: row.points,
      nationality: {
        code: row.nationality_code,
      },
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
