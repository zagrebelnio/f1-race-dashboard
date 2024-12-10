import readQuery from '../util/readQuery.js';
import pool from './pool.js';
import path from 'path';

const queriesPath = './server/api/database/queries';

async function getDrivers(year) {
  try {
    const query = readQuery(path.join(queriesPath, 'getDrivers.sql'));
    const { rows } = await pool.query(query, [year]);
    return rows;
  } catch (err) {
    console.log('Error fetching drivers:', err);
    throw err;
  }
}

async function getConstructors(year, name) {
  try {
    const query = readQuery(path.join(queriesPath, 'getConstructors.sql'));
    const { rows } = await pool.query(query, [year || null, name]);
    return rows;
  } catch (err) {
    console.log('Error fetching constructors:', err);
    throw err;
  }
}

async function getSeasons() {
  try {
    const query = readQuery(path.join(queriesPath, 'getSeasons.sql'));
    const { rows } = await pool.query(query);
    return rows;
  } catch (err) {
    console.log('Error fetching seasons:', err);
    throw err;
  }
}

async function getConstructorsPointsProgression(year) {
  try {
    const query = readQuery(
      path.join(queriesPath, 'getConstructorsPointsProgression.sql')
    );
    const { rows } = await pool.query(query, [year]);
    return rows;
  } catch (err) {
    console.log('Error fetching constructors points progression:', err);
    throw err;
  }
}

async function getDriversPointsProgression(year) {
  try {
    const query = readQuery(
      path.join(queriesPath, 'getDriversPointsProgression.sql')
    );
    const { rows } = await pool.query(query, [year]);
    return rows;
  } catch (err) {
    console.log('Error fetching drivers points progression:', err);
    throw err;
  }
}

async function getDriversStandings(year) {
  try {
    const query = readQuery(path.join(queriesPath, 'getDriversStandings.sql'));
    const { rows } = await pool.query(query, [year]);
    return rows;
  } catch (err) {
    console.log('Error fetching drivers standings:', err);
    throw err;
  }
}

async function getConstructorsStandings(year) {
  try {
    const query = readQuery(
      path.join(queriesPath, 'getConstructorsStandings.sql')
    );
    const { rows } = await pool.query(query, [year]);
    return rows;
  } catch (err) {
    console.log('Error fetching constructors standings:', err);
    throw err;
  }
}

async function getPracticeResults(year, round, type) {
  try {
    const query = readQuery(path.join(queriesPath, 'getPracticeResults.sql'));
    const { rows } = await pool.query(query, [year, round, type]);
    return rows;
  } catch (err) {
    console.log('Error fetching practice results:', err);
    throw err;
  }
}

async function getQualifyingResults(year, round) {
  try {
    const query = readQuery(path.join(queriesPath, 'getQualifyingResults.sql'));
    const { rows } = await pool.query(query, [year, round]);
    return rows;
  } catch (err) {
    console.log('Error fetching qualifying results:', err);
    throw err;
  }
}

async function getRaceResults(year, round) {
  try {
    const query = readQuery(path.join(queriesPath, 'getRaceResults.sql'));
    const { rows } = await pool.query(query, [year, round]);
    return rows;
  } catch (err) {
    console.log('Error fetching race results:', err);
    throw err;
  }
}

async function getDriverCareerStats(id) {
  try {
    const query = readQuery(path.join(queriesPath, 'getDriverCareerStats.sql'));
    const { rows } = await pool.query(query, [id]);
    return rows;
  } catch (err) {
    console.log('Error fetching driver career stats:', err);
    throw err;
  }
}

async function getConstructorStats(id) {
  try {
    const query = readQuery(path.join(queriesPath, 'getConstructorStats.sql'));
    const { rows } = await pool.query(query, [id]);
    return rows;
  } catch (err) {
    console.log('Error fetching constructor stats:', err);
    throw err;
  }
}

async function getRounds(year) {
  try {
    const query = readQuery(path.join(queriesPath, 'getRounds.sql'));
    const { rows } = await pool.query(query, [year]);
    return rows;
  } catch (err) {
    console.log('Error fetching rounds:', err);
    throw err;
  }
}

export {
  getDrivers,
  getConstructors,
  getSeasons,
  getConstructorsPointsProgression,
  getDriversPointsProgression,
  getDriversStandings,
  getConstructorsStandings,
  getPracticeResults,
  getQualifyingResults,
  getRaceResults,
  getDriverCareerStats,
  getConstructorStats,
  getRounds,
};
