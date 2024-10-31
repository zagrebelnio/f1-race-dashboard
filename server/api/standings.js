import express from 'express';
import driversRoute from './standings/drivers.js';
import constructorsRoute from './standings/constructors.js';

const router = express.Router();

router.use('/drivers', driversRoute);
router.use('/constructors', constructorsRoute);

export default router;
