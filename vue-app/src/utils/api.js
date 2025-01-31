import axios from 'axios';

export async function getWebsites(url) {
  const response = await axios.get(`${url}/wp/v2/websites?per_page=100`);

  return response.data;
}

export async function deleteWebsite(data) {
  const response = await axios.delete(`${data.wpData.rest_url}/wp/v2/websites/${data.website.id}`, {
    headers: {
      'X-WP-Nonce': data.wpData.nonce
    }
  });

  return response.data;
}

// TODO: Gem APIKEY et eller andet sted, så vi ikke skriver den direkte i koden :)
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

export async function postNewWebsite(data) {
  const response = await axios.post(`${data.wpData.rest_url}/wp/v2/websites`, data.postData, {
    headers: {
      'X-WP-Nonce': data.wpData.nonce
    }
  });

  return response.data;
}

export async function getWordFenceData(domain) {

  const form = new FormData();

  form.append('lastcttime', 'time');
  form.append('lastissuetime', 'time');
  form.append('action', 'wordfence_activityLogUpdate');
  form.append('nonce', domain.nonceString);

  const response = await axios.post(`${domain.url}/wp-admin/admin-ajax.php`, form);

  return response.data;
}

export async function putWebsite(data) {
  const response = await axios.post(`${data.wpData.rest_url}/wp/v2/websites/${data.postData.id}`, data.postData, {
    headers: {
      'X-WP-Nonce': data.wpData.nonce
    }
  });

  return response.data;
}
