import React, { useState } from 'react';
import classes from './Standings.module.css'
import DriversTable from '../components/DriverTable.js'

const options = {
    seasons: [2024, 2023, 2022, 2021, 2020],
  };


function Standings (){
    const [activeButton, setActiveButton] = useState("drivers");
  return (
    <div className={classes.mainSection}>
        <section className={classes.search}>
            <div>
                <button onClick={() => setActiveButton("drivers")} 
                className={activeButton === "drivers" ? classes.activeButton : classes.normalButton}>
                    Drivers</button>
                <button onClick={() => setActiveButton("constructors")}
                 className={activeButton === "constructors" ? classes.activeButton : classes.normalButton}>
                    Constructors</button>
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
            <DriversTable activeButton={activeButton}/>
        </section>
    </div>
  )
}

export default Standings

