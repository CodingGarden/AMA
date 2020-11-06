const got = require('got');

const {
  twitchHomePageUrl,
  url,
  notFoundUrl,
  accept,
  clientID,
} = require('./environment');

async function getWithGot(url) {
  try {
    const response = await got(url, {
      headers: {
        'client-id': clientID,
        accept,
      },
      responseType: 'json',
    });
    console.log(response);
  } catch (error) {
    console.error(error);
    console.log(error.response.body);
    // console.error(JSON.parse(error.response.body));
  }
}

getWithGot(url);
// getWithGot(notFoundUrl);
