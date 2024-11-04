import express from 'express';
import raceRoute from './results/race.js';
import qualifyingRoute from './results/qualifying.js';

const router = express.Router();

router.use('/race', raceRoute);
router.use('/qualifying', qualifyingRoute);

export default router;
