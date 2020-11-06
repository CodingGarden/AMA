/* eslint-disable no-restricted-syntax */
const https = require('https');
//  https://nodejs.org/en/knowledge/HTTP/clients/how-to-create-a-HTTP-request/

const options = {
  host: 'api.twitch.tv',
  path: '/kraken/channels/413856795',
  headers: {
    'client-id': 'gp762nuuoqcoxypju8c569th9wz7q5',
    accept: 'application/vnd.twitchtv.v5+json',
  },
};

const req = https.request(options, async (response) => {
  let body = '';
  for await (const chunk of response) {
    body += chunk;
  }
  const data = JSON.parse(body);
  console.log(data.status);
});
req.on('error', (error) => {
  console.log('ERROR');
  console.log(error);
});
req.end();
