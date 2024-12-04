import express from 'express';
import { getPracticeResults } from '../database/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const season = req.query.season;
    const round = req.query.round;
    const practice = `FREE_PRACTICE_${req.query.practice}_RESULT`;

    if (!season || !round || !practice) {
      return res
        .status(400)
        .json({ error: 'Season, round and practice parameters are required' });
    }

    const rows = await getPracticeResults(season, round, practice);

    const data = rows.map((row) => ({
      position: row.position,
      firstName: row.first_name,
      lastName: row.last_name,
      team: {
        name: row.team_name,
        color: row.team_color,
      },
      practice: {
        time: row.time,
        gap: row.gap,
        laps: row.laps,
      },
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
