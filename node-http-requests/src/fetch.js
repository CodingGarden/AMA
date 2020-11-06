const fetch = require('node-fetch');

const {
  twitchHomePageUrl,
  url,
  notFoundUrl,
  accept,
  clientID,
} = require('./environment');

async function getWithFetch(url) {
  try {
    const response = await fetch(url, {
      method: 'GET', // optional if get!
      headers: {
        accept,
        'client-id': clientID,
      },
    });
    const contentType = response.headers.get('content-type');
    let data;
    // THERE ARE BETTER WAYS TO DO THIS
    if (contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    if (response.ok) {
      console.log(data);
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      error.response.data = data;
      throw error;
    }
  } catch (error) {
    console.error(error);
    console.log(error.response);
    console.log(error.response.data);
  }
}

getWithFetch(url);
// getWithFetch(notFoundUrl);
// getWithFetch('https://alskdjflkasdjflkasdjalsdkjflkasdjflkzsjlkfajslkdjfalkdsfjl.com');
// getWithFetch(twitchHomePageUrl);

