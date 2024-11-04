import express from 'express';
import raceRoute from './results/race.js';
import qualifyingRoute from './results/qualifying.js';
import practiceRoute from './results/practice.js';

const router = express.Router();

router.use('/race', raceRoute);
router.use('/qualifying', qualifyingRoute);
router.use('/practice', practiceRoute);

export default router;
