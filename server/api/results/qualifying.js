import express from 'express';
import pool from '../db.js';
import readQuery from '../util/readQuery.js';

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

    const query = readQuery('./server/api/queries/getQualifyingResults.sql');

    const { rows } = await pool.query(query, [season, round]);

    const data = rows.map((row) => ({
      position: row.position,
      firstName: row.first_name,
      lastName: row.last_name,
      team: {
        name: row.team_name,
        color: row.team_color,
      },
      qualifying: {
        q1: row.q1,
        q2: row.q2,
        q3: row.q3,
        gap: row.gap,
      },
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
