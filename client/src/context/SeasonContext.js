import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const SeasonContext = createContext();

export const SeasonProvider = ({ children }) => {
  const [season, setSeason] = useState(2024);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/seasons');
        setSeasons(response.data);
      } catch (error) {
        console.log('Error fetching seasons: ', error);
      }
    };
    fetchSeasons();
  });

  return (
    <SeasonContext.Provider value={{ season, seasons, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => {
  const context = useContext(SeasonContext);

  if (!context) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }

  return context;
};
