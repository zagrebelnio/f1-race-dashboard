import express from 'express';

const router = express.Router();

router.get(':id', async (req, res) => {
  try {
    const id = req.params.id;
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

export default router;
