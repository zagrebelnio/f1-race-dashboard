import express from 'express';
import driversRoute from './drivers.js';
import constructorsRoute from './constructors.js';
import standingsRoute from './standings.js';
import resultsRoute from './results.js';

const router = express.Router();

router.use('/drivers', driversRoute);
router.use('/constructors', constructorsRoute);
router.use('/standings', standingsRoute);
router.use('/results', resultsRoute);

export default router;
