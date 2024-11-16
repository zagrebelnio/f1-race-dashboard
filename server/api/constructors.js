import express from 'express';
import { getConstructors, getConstructorStats } from './database/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const season = req.query.season || null;
  let name = req.query.name || '';

  if (season === undefined) {
    return res.status(400).json({ error: 'Season parameter is required' });
  }

  try {
    const rows = await getConstructors(season, name);

    const constructors = rows.map((row) => ({
      id: row.id,
      name: row.name,
      logo: row.logo,
      color: row.color,
    }));

    if (rows.length === 0) {
      res.status(404).json({ error: 'No data found for this season' });
    } else {
      res.status(200).json(constructors);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const rows = await getConstructorStats(id);

    if (rows.length === 0) {
      res.status(404).json({ error: 'No such constructor found' });
    }

    const [row] = rows;

    const constructorData = {
      id: row.id,
      name: row.full_name,
      logo: row.logo,
      countryCode: row.alpha2_code,
      countryName: row.name,
      bestChampionshipPosition: row.best_championship_position,
      bestStartingGridPosition: row.best_starting_grid_position,
      bestRaceResult: row.best_race_result,
      totalChampionshipWins: row.total_championship_wins,
      totalRaceEntries: row.total_race_entries,
      totalRaceStarts: row.total_race_starts,
      totalRaceWins: row.total_race_wins,
      total1And2Finishes: row.total_1_and_2_finishes,
      totalRaceLaps: row.total_race_laps,
      totalPodiums: row.total_podiums,
      totalPodiumRacse: row.total_podium_races,
      totalPoints: row.total_points,
      totalPolePositions: row.total_pole_positions,
      totalFastestLaps: row.total_fastest_laps,
    };

    res.status(200).json(constructorData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
