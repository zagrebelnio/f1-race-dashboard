import classes from './StandingsTable.module.css';
import flagNl from '../assets/nederlands.png';
import redBullLogo from '../assets/redBullLogo.png';

const StandingsTable = ({ type }) => {
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
          <tr>
            <td>1</td>
            {type === 'drivers' && (
              <td>
                <img src={flagNl} alt="flag" />
                Max VERSTAPPEN
              </td>
            )}
            <td className={classes.constructorColumn}>
              <img src={redBullLogo} alt="logo" />
              Red Bull Racing
            </td>
            <td>303</td>
          </tr>
          <tr>
            <td>2</td>
            {type === 'drivers' && (
              <td>
                <img className={classes.img} src={flagNl} alt="flag" />
                Lando NORRIS
              </td>
            )}
            <td className={classes.constructorColumn}>
              <img src={redBullLogo} alt="logo" />
              McLaren
            </td>
            <td>241</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default StandingsTable;
