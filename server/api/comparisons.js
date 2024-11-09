import express from 'express';
import constructorsRoute from './comparisons/constructors.js';
import driversRoute from './comparisons/drivers.js';

const router = express.Router();

router.use('/constructors', constructorsRoute);
router.use('/drivers', driversRoute);

export default router;
