import express from 'express';
import { getRaceResults } from '../database/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const season = req.query.season;
    const round = req.query.round;

    if (!season || !round) {
      return res
        .status(400)
        .json({ error: 'Season and round parameters are required' });
    }

    const rows = await getRaceResults(season, round);

    const data = rows.map((row) => ({
      position: row.position,
      firstName: row.first_name,
      lastName: row.last_name,
      team: {
        name: row.team_name,
        color: row.team_color,
      },
      race: {
        laps: row.race_laps,
        time: row.race_time,
        fastestLap: row.race_fastest_lap,
        points: row.race_points,
      },
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
