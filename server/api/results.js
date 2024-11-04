import express from 'express';
import raceRoute from './results/race.js';

const router = express.Router();

router.use('/race', raceRoute);

export default router;
