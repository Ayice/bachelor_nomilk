import axios from 'axios';

export async function getLightHouseData(website) {
  const response = await axios.get((`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${website}&key=AIzaSyCA3Aj7UEggBO9CbuXBMg3p8VmdW-xiBfg`));

  return response.data;
}