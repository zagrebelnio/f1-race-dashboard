import express from 'express';
import constructorsRoute from './comparisons/constructors.js';

const router = express.Router();

router.use('/constructors', constructorsRoute);

export default router;
