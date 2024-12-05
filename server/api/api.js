import express from 'express';
import driversRoute from './drivers.js';
import constructorsRoute from './constructors.js';
import standingsRoute from './standings.js';
import resultsRoute from './results.js';
import seasonsRoute from './seasons.js';
import comparisonsRoute from './comparisons.js';

const router = express.Router();

router.use('/drivers', driversRoute);
router.use('/constructors', constructorsRoute);
router.use('/standings', standingsRoute);
router.use('/results', resultsRoute);
router.use('/seasons', seasonsRoute);
router.use('/comparisons', comparisonsRoute);

export default router;
