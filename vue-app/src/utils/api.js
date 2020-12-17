import axios from 'axios';

export async function getWebsites(url) {
  const response = await axios.get(`${url}/wp/v2/websites?per_page=100`);

  return response.data;
}

export async function deleteWebsite(wpData, id) {
  const response = await axios.delete(`${wpData.rest_url}/wp/v2/websites/${id}`, {
    headers: {
      'X-WP-Nonce': wpData.nonce
    }
  });

  return response.data;
}

export async function getLightHouseData(website) {
  const params = new URLSearchParams();

  params.append('url', website);
  params.append('strategy', 'MOBILE');
  params.append('category', 'seo');
  params.append('category', 'performance');
  params.append('key', 'AIzaSyCA3Aj7UEggBO9CbuXBMg3p8VmdW-xiBfg');

  const request = {
    params: params
  };

  const response = await axios.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed/', request);

  return response.data;
}

export async function postNewWebsite(data, wpData) {
  const response = await axios.post(`${wpData.rest_url}/wp/v2/websites`, data, {
    headers: {
      'X-WP-Nonce': wpData.nonce
    }
  });

  return response.data;
}
