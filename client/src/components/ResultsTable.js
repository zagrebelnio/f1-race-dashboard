import classes from './ResultsTable.module.css'

const ResultsTable = ({ activeButton }) => {
  return (
      <section className={classes.tableBody}>
        <table>
          <thead>
              <tr>
                  <th>Pos</th>
                  <th>Driver</th>
                  <th>Constructor</th>
                  <th>Time</th>
                  <th>Laps</th>
                  <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>1</td>
                  <td>Max VERSTAPPEN</td>
                  <td className={classes.constructorColumn}>Red Bull Racing</td>
                  <td>1:14:40.727</td>
                  <td>52</td>
                  <td>25</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Lando NORRIS</td>
                  <td className={classes.constructorColumn}>McLaren</td>
                  <td>+2.44</td>
                  <td>52</td>
                  <td>18</td>
              </tr>
            </tbody>
          </table>  
      </section>
  )
}

export default ResultsTable


