import { useState } from 'react';
import classes from './Standings.module.css'
import StandingsTable from '../components/StandingsTable.js'

const options = {
    seasons: [2024, 2023, 2022, 2021, 2020],
  };


function StandingsPage (){
    const [activeButton, setActiveButton] = useState("drivers");

    const handleButtonClick = (type) => {
        setActiveButton(type);
      };

  return (
    
    <div className={classes.mainSection}>
        <section className={classes.search}>
            <div>
                <button onClick={() => handleButtonClick("drivers")} 
                className={activeButton === "drivers" ? classes.activeButton : classes.normalButton}>
                    Drivers</button>
                <button onClick={() => handleButtonClick("constructors")}
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
            <StandingsTable type={activeButton}/>
        </section>
    </div>
  )
}

export default StandingsPage

