import express from 'express';
import driversRoute from './drivers.js';
import constructorsRoute from './constructors.js';
import standingsRoute from './standings.js';

const router = express.Router();

router.use('/drivers', driversRoute);
router.use('/constructors', constructorsRoute);
router.use('/standings', standingsRoute);

export default router;
