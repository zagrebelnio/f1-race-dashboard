import classes from './ResultsTable.module.css';
import fastestLap from '../assets/fastestLap.png';

const ResultsTable = ({ results, type }) => {
  return (
    <section className={classes.tableBody}>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Constructor</th>
            {type === 'race' && <th>Time</th>}
            {type === 'race' && <th>Laps</th>}
            {type === 'qualifying' && <th>Q1</th>}
            {type === 'qualifying' && <th>Q2</th>}
            {type === 'qualifying' && <th>Q3</th>}
            {type === 'qualifying' && <th>Gap</th>}
            {type === 'practice' && <th>Time</th>}
            {type === 'practice' && <th>Gap</th>}
            {type === 'practice' && <th>Laps</th>}
            {type === 'race' && <th>Points</th>}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {results.map((result, index) => (
            <tr key={index}>
              <td
                className={classes.centerTextTable}
                style={{
                  borderColor: result.team?.color || '#ccc',
                }}
              >
                {result.position}
              </td>
              <td>{`${result.firstName} ${result.lastName}`}</td>
              <td style={{ backgroundColor: result.team?.color || '#ccc' }}>
                {result.team?.name || '-'}
              </td>
              {type === 'race' && <td>{result.race?.time || '-'}</td>}
              {type === 'race' && (
                <td className={classes.centerTextTable}>
                  {result.race?.laps || '-'}
                </td>
              )}
              {type === 'qualifying' && <td>{result.qualifying?.q1 || '-'}</td>}
              {type === 'qualifying' && <td>{result.qualifying?.q2 || '-'}</td>}
              {type === 'qualifying' && <td>{result.qualifying?.q3 || '-'}</td>}
              {type === 'qualifying' && (
                <td>{result.qualifying?.gap || '-'}</td>
              )}
              {type === 'practice' && <td>{result.practice?.time || '-'}</td>}
              {type === 'practice' && <td>{result.practice?.gap || '-'}</td>}
              {type === 'practice' && (
                <td className={classes.centerTextTable}>
                  {result.practice?.laps || '-'}
                </td>
              )}
              {type === 'race' && (
                <td className={classes.centerTextTable}>
                  {result.race?.points === null
                    ? 0
                    : Number.parseFloat(result.race?.points).toString() || '-'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ResultsTable;
