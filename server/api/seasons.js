import express from 'express';
import pool from './db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = 'SELECT DISTINCT year FROM season ORDER BY year DESC;';

    const { rows } = await pool.query(query);

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
