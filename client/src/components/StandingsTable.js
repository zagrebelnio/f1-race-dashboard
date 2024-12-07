import classes from './StandingsTable.module.css';
import teamPlaceholder from '../assets/default-team.jpg';

const StandingsTable = ({ data, type }) => {
  return (
    <section className={classes.tableBody}>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th>Pos</th>
            {type === 'drivers' && <th>Driver</th>}
            <th>Constructor</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {data.map((row) => (
            <tr key={row.position}>
              <td
                style={{
                  borderRight: `10px solid ${row.team?.color ?? row.color ?? '#b6b6b6'}`,
                }}
              >
                {row.position}
              </td>
              {type === 'drivers' && (
                <td>
                  {row.nationality?.code && (
                    <img
                      className={classes.flag}
                      src={`https://flagsapi.com/${row.nationality.code}/flat/64.png`}
                      alt={`${row.nationality.code} flag`}
                    />
                  )}
                  {row.firstName} {row.lastName}
                </td>
              )}
              <td
                style={{
                  backgroundColor: row.team?.color ?? row.color ?? '#b6b6b6',
                }}
              >
                <img
                  className={classes.teamLogo}
                  src={row.team?.logo ?? row.logo}
                  alt={`${row.team?.name ?? row.name} logo`}
                  onError={(e) => (e.target.src = teamPlaceholder)}
                />
                {row.team?.name ?? row.name}
              </td>
              <td>{Number.parseFloat(row.points).toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StandingsTable;
