import express from 'express';
import { getDrivers, getDriverCareerStats } from './database/index.js';
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

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const rows = await getDriverCareerStats(id);

    if (rows.length === 0) {
      res.status(404).json({ error: 'No such driver found' });
    }

    const [row] = rows;

    const driverData = {
      id: row.id,
      name: row.name,
      firstName: row.first_name,
      lastName: row.last_name,
      fullName: row.full_name,
      abbreviation: row.abbreviation,
      permanentNumber: row.permanent_number,
      gender: row.gender,
      dateOfBirth: row.date_of_birth,
      dateOfDeath: row.date_of_death,
      placeOfBirth: row.place_of_birth,
      countryOfBirth: row.country_of_birth_country_id,
      nationality: row.nationality_country_id,
      secondNationality: row.second_nationality_country_id,
      bestChampionshipPosition: row.best_championship_position,
      bestStartingGridPosition: row.best_starting_grid_position,
      bestRaceResult: row.best_race_result,
      totalChampionshipWins: row.total_championship_wins,
      totalRaceEntries: row.total_race_entries,
      totalRaceStarts: row.total_race_starts,
      totalRaceWins: row.total_race_wins,
      totalRaceLaps: row.total_race_laps,
      totalPodiums: row.total_podiums,
      totalPoints: row.total_points,
      totalChampionshipPoints: row.total_championship_points,
      totalPolePositions: row.total_pole_positions,
      totalFastestLaps: row.total_fastest_laps,
      totalDriverOfTheDay: row.total_driver_of_the_day,
      totalGrandSlams: row.total_grand_slams,
    };

    res.status(200).send(driverData);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

export default router;
