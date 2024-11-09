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
      './server/api/queries/getConstructorsPointsProgression.sql'
    );

    const { rows } = await pool.query(query, [season]);

    const labelsMap = new Map();
    rows.forEach((row) => {
      if (!labelsMap.has(row.round)) {
        labelsMap.set(row.round, row.abbreviation);
      }
    });

    const labels = Array.from(labelsMap.values());

    const teams = {};

    rows.forEach((row) => {
      const { name, color, round, abbreviation, points } = row;

      if (!teams[name]) {
        teams[name] = {
          label: name,
          borderColor: color,
          data: Array(labels.length).fill(null),
        };
      }

      const roundIndex = Array.from(labelsMap.keys()).indexOf(round);
      if (roundIndex !== -1) {
        teams[name].data[roundIndex] = parseFloat(points);
      }
    });

    const data = Object.values(teams);

    res.status(200).json({ labels, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
