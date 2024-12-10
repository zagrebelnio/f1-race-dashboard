import classes from './ResultsTable.module.css';
import fastestLap from '../assets/fastestLap.png';

const ResultsTable = ({ activeButton }) => {
  return (
    <section className={classes.tableBody}>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Time</th>
            <th>Laps</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          <tr>
            <td className={classes.centerTextTable}>1</td>
            <td>Max VERSTAPPEN</td>
            <td className={classes.constructorColumn}>Red Bull Racing</td>
            <td>1:14:40.727</td>
            <td className={classes.centerTextTable}>52</td>
            <td className={classes.centerTextTable}>25</td>
          </tr>
          <tr>
            <td className={classes.centerTextTable}>2</td>
            <td>Lando NORRIS</td>
            <td className={classes.constructorColumn}>McLaren</td>
            <td className={classes.fastestLap}>
              <span className={classes.span}>+2.44</span>
              <img src={fastestLap} alt="fastest lap clock" />
            </td>
            <td className={classes.centerTextTable}>52</td>
            <td className={classes.centerTextTable}>18</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ResultsTable;
