import classes from './Standings.module.css'
import DriversTable from '../components/DriverTable.js'

const options = {
    seasons: [2024, 2023, 2022, 2021, 2020],
  };


function Standings (){
  return (
    <div className={classes.mainSection}>
        <section className={classes.search}>
            <div>
                <button>Drivers</button>
                <button>Constructors</button>
            </div>
            <select name="season" id="season">
            {options.seasons.map((season) => (
                <option key={season} value={season}>
                {season}
                </option>
            ))}
            </select>
        </section>
        <section className={classes.content}>
            <DriversTable/>
        </section>
    </div>
  )
}

export default Standings
