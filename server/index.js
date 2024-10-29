import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './api/api.js';

dotenv.config();

const app = express();

app.use(cors());

app.use('/api', apiRoutes);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
