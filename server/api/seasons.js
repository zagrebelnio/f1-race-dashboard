import express from 'express';
import { getSeasons } from './database/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rows = await getSeasons();

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
