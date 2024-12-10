import express from 'express';
import { getRounds } from './database/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const season = req.query.season;

    if (!season) {
      return res.status(400).json({ error: 'Season parameter is required' });
    }

    const rows = await getRounds(season);

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
