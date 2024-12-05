import { useState } from 'react';
import classes from './Results.module.css'
import ResultsTable from '../components/ResultsTable.js'

const options = {
    seasons: [2024, 2023, 2022, 2021, 2020],
    races: ['Italy', 'Belgium', 'Miami'],
  };


function ResultsPage (){
    const [activeButton, setActiveButton] = useState("race");

    const handleButtonClick = (type) => {
        setActiveButton(type);
      };

  return (
    
    <div className={classes.mainSection}>
        <section className={classes.search}>
            <div>
                <button onClick={() => handleButtonClick("fp1")} 
                className={activeButton === "fp1" ? classes.activeButton : classes.normalButton}>
                    FP1</button>
                <button onClick={() => handleButtonClick("fp2")}
                 className={activeButton === "fp2" ? classes.activeButton : classes.normalButton}>
                    FP2</button>
                <button onClick={() => handleButtonClick("fp3")}
                 className={activeButton === "fp3" ? classes.activeButton : classes.normalButton}>
                    FP3</button>
                <button onClick={() => handleButtonClick("qualifying")}
                 className={activeButton === "qualifying" ? classes.activeButton : classes.normalButton}>
                    Qualifying</button> 
                <button onClick={() => handleButtonClick("race")}
                 className={activeButton === "race" ? classes.activeButton : classes.normalButton}>
                    Race</button>   
            </div>
            <select name="season" id="races">
            {options.races.map((race) => (
                <option key={race} value={race}>
                {race}
                </option>
            ))}
            </select>
            <select name="season" id="season">
            {options.seasons.map((season) => (
                <option key={season} value={season}>
                {season}
                </option>
            ))}
            </select>
        </section>
        <section className={classes.content}>
            <ResultsTable type={activeButton}/>
        </section>
    </div>
  )
}

export default ResultsPage

