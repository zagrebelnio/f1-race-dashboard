import express from 'express';
import pool from './db.js';
import axios from 'axios';
import fetchDriverImages from './util/fetchDriverImages.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const season = req.query.season;

  if (!season) {
    return res.status(400).json({ error: 'Season parameter is required' });
  }

  try {
    const query = `
      SELECT DISTINCT ON (sd.position_number) d.first_name,
                   d.id,
                   d.last_name,
                   d.abbreviation,
                   d.permanent_number AS number,
                   country.alpha2_code,
                   c.name AS team,
                   c.color AS team_color,
                   c.logo AS team_logo
      FROM season_driver sd
      JOIN driver d ON sd.driver_id = d.id
      JOIN season_entrant_driver sed ON sed.driver_id = d.id
      AND sed.year = sd.year
      JOIN
      CONSTRUCTOR c ON c.id = sed.constructor_id
      JOIN country ON country.id = d.nationality_country_id
      WHERE sd.year = $1
        AND position_number IS NOT NULL
      ORDER BY position_number ASC;
    `;

    const { rows } = await pool.query(query, [season]);

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
