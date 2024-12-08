import { useState } from 'react';
import classes from './Results.module.css'
import ResultsTable from '../components/ResultsTable.js'
import SectionButton from '../components/SectionButton.js'

const options = {
    seasons: [2024, 2023, 2022, 2021, 2020],
    races: ['Italy', 'Belgium', 'Miami'],
  };


function ResultsPage (){
    const [activeButton, setActiveButton] = useState("race");

  return (
    
    <div className={classes.mainSection}>
        <section className={classes.search}>
            <div>
            <SectionButton 
              isSelected={activeButton === "fp1"} 
              onClick={() => setActiveButton("fp1")}>
              FP1
            </SectionButton>
            <SectionButton
              isSelected={activeButton === "fp2"}
              onClick={() => setActiveButton("fp2")}
            >
              FP2
            </SectionButton>
            <SectionButton
              isSelected={activeButton === "fp3"}
              onClick={() => setActiveButton("fp3")}
            >
              FP3
            </SectionButton>
            <SectionButton
              isSelected={activeButton === "qualifying"}
              onClick={() => setActiveButton("qualifying")}
            >
              Qualifying
            </SectionButton>
            <SectionButton
              isSelected={activeButton === "race"}
              onClick={() => setActiveButton("race")}
            >
              Race
            </SectionButton>
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

