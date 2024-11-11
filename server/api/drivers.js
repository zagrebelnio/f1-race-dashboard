import express from 'express';
import { getDrivers } from './database/index.js';
import fetchDriverImages from './util/fetchDriverImages.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const season = req.query.season;

  if (!season) {
    return res.status(400).json({ error: 'Season parameter is required' });
  }

  try {
    const rows = await getDrivers(season);

    const driverImages = await fetchDriverImages(season);
    const data = rows.map((row) => {
      const fullName = `${row.first_name} ${row.last_name}`;
      const driverImage = driverImages.find((driver) =>
        fullName.includes(driver.name)
      );

      return {
        ...row,
        image: driverImage ? driverImage.imageUrl : null,
      };
    });

    const drivers = data.map((row) => ({
      id: row.id,
      firstName: row.first_name,
      lastName: row.last_name,
      abbr: row.abbreviation,
      number: row.number,
      countryCode: row.alpha2_code,
      team: {
        name: row.team,
        color: row.team_color,
        logo: row.team_logo,
      },
      image: row.image,
    }));

    if (rows.length === 0) {
      res.status(404).json({ error: 'No data found for this season' });
    } else {
      res.status(200).json(drivers);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
