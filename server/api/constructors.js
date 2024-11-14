import express from 'express';
import { getConstructors } from './database/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const season = req.query.season;

  if (!season) {
    return res.status(400).json({ error: 'Season parameter is required' });
  }

  try {
    const rows = await getConstructors(season);

    const construcotrs = rows.map((row) => ({
      id: row.id,
      name: row.name,
      logo: row.logo,
      color: row.color,
    }));

    if (rows.length === 0) {
      res.status(404).json({ error: 'No data found for this season' });
    } else {
      res.status(200).json(construcotrs);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
