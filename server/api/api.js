import express from 'express';
import driversRoute from './drivers.js';

const router = express.Router();

router.use('/drivers', driversRoute);

export default router;
