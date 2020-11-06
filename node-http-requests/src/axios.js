const axios = require('axios');

const {
  twitchHomePageUrl,
  url,
  notFoundUrl,
  accept,
  clientID,
} = require('./environment');

async function getWithAxios(url) {
  try {
    const { data, headers } = await axios
      .get(url, {
        headers: {
          accept,
          'client-id': clientID,
        },
      });
    console.log(headers);
    console.log(data);
  } catch (error) {
    console.error(error.message);
    console.error(error.response.headers);
    console.error(error.response.data);
  }
}

getWithAxios(url);
// getWithAxios(notFoundUrl);
// getWithAxios(twitchHomePageUrl);
