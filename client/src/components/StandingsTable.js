import classes from './StandingsTable.module.css';
// import flagNl from '../assets/nederlands.png';
// import redBullLogo from '../assets/redBullLogo.png';

const StandingsTable = ({ data, type }) => {
  return (
    <section className={classes.tableBody}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Pos</th>
            {type === 'drivers' && <th>Driver</th>}
            <th>Constructor</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.position}>
              <td
                style={{
                  borderRight: `10px solid ${row.team.color ?? '#b6b6b6'}`,
                }}
              >
                {row.position}
              </td>
              {type === 'drivers' && (
                <td>
                  <img
                    src={`https://flagsapi.com/${row.nationality.code}/flat/64.png`}
                    alt="flag"
                  />
                  {row.firstName} {row.lastName}
                </td>
              )}
              <td style={{ backgroundColor: row.team.color ?? '#b6b6b6' }}>
                <img src={row.team.logo} alt="Team logo" />
                {row.team.name}
              </td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StandingsTable;
