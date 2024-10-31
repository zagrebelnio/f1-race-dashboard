import express from 'express';
import pool from '../db.js';
import readQuery from '../util/readQuery.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const season = req.query.season;

    if (!season) {
      return res.status(400).json({ error: 'Season parameter is required' });
    }

    const query = readQuery(
      './server/api/queries/getConstructorsStandings.sql'
    );

    const { rows } = await pool.query(query, [season]);

    const data = rows.map((row) => ({
      position: row.position,
      name: row.team_name,
      color: row.team_color,
      logo: row.team_logo,
      points: row.points,
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
