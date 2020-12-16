import axios from 'axios';

export async function getLightHouseData(website) {
  const params = new URLSearchParams();

  params.append('url', website);
  params.append('key', 'AIzaSyCA3Aj7UEggBO9CbuXBMg3p8VmdW-xiBfg');
  params.append('category', 'seo');
  params.append('category', 'performance');
  params.append('strategy', 'mobile');

  const request = {
    params: params
  };

  // TODO: Fetch as mobile, not desktop
  const response = await axios.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed/', request);

  return response.data;
}

export async function postNewWebsite(data, wpData) {
  const response = await axios.post(`${wpData.rest_url}/wp/v2/websites/`, data, {
    headers: {
      'X-WP-Nonce': wpData.nonce
    }
  });

  return response.data;
}
