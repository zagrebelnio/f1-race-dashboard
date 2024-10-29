import axios from 'axios';
import * as cheerio from 'cheerio';

async function fetchDriverImages(season) {
  try {
    const response = await axios.get(
      `http://ergast.com/api/f1/${season}/drivers.json`
    );

    const drivers = response.data.MRData.DriverTable.Drivers;

    const driverImages = await Promise.all(
      drivers.map(async (driver) => {
        const wikiUrl = driver.url;
        const wikiResponse = await axios.get(wikiUrl);
        const $ = cheerio.load(wikiResponse.data);

        const imageElement = $('.infobox-image img.mw-file-element');
        const imageUrl = imageElement.attr('src');

        return {
          name: driver.givenName + ' ' + driver.familyName,
          imageUrl: imageUrl ? `https:${imageUrl}` : null,
        };
      })
    );
    return driverImages;
  } catch (error) {
    console.error('Error fetching driver images:', error);
  }
}

export default fetchDriverImages;
