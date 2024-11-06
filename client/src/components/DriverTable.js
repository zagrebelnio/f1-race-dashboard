import classes from './DriverTable.module.css'
import flagNl from '../assets/nederlands.png'
import redBullLogo from '../assets/redBullLogo.png'

const DriverTable = () => {
  return (
    <main className={classes.standingTable}>
      <section className={classes.tableBody}>
        <table>
          <thead>
              <tr>
                  <th>Pos</th>
                  <th>Driver</th>
                  <th>Constructor</th>
                  <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>1</td>
                  <td><img src={flagNl} alt='flag'/>Max VERSTAPPEN</td>
                  <td className={classes.constructorColumn}><img src={redBullLogo} alt='logo'/>Red Bull Racing</td>
                  <td>303</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td><img src={flagNl} alt='flag'/>Lando NORRIS</td>
                  <td className={classes.constructorColumn}><img src={redBullLogo} alt='logo'/>McLaren</td>
                  <td>241</td>
              </tr>
            </tbody>
          </table>  
      </section>
    </main>
  )
}

export default DriverTable


