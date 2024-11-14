import axios from 'axios';

async function fetchDriverImageByName(driverName) {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(
        driverName
      )}`
    );

    const data = response.data.query.pages;
    const pageId = Object.keys(data)[0];
    const imageUrl = data[pageId].original.source;

    return imageUrl;
  } catch (error) {
    console.error('Error fetching driver image:', error);
    return null;
  }
}

export default fetchDriverImageByName;
