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
      './server/api/queries/getDriversPointsProgression.sql'
    );

    const { rows } = await pool.query(query, [season]);

    const labelsMap = new Map();
    rows.forEach((row) => {
      if (!labelsMap.has(row.round)) {
        labelsMap.set(row.round, row.abbreviation);
      }
    });

    const labels = Array.from(labelsMap.values());

    const drivers = {};

    rows.forEach((row) => {
      const { first_name, last_name, round, abbreviation, points } = row;
      const name = `${first_name} ${last_name}`;

      if (!drivers[name]) {
        drivers[name] = {
          label: name,
          data: Array(labels.length).fill(null),
        };
      }

      const roundIndex = Array.from(labelsMap.keys()).indexOf(round);
      if (roundIndex !== -1) {
        drivers[name].data[roundIndex] = parseFloat(points);
      }
    });

    const data = Object.values(drivers);

    res.status(200).json({ labels, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
