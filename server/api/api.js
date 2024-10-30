import express from 'express';
import driversRoute from './drivers.js';
import constructorsRoute from './constructors.js';

const router = express.Router();

router.use('/drivers', driversRoute);
router.use('/constructors', constructorsRoute);

export default router;
