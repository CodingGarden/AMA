const axios = require('axios');

const API_URL = (channelName) => `https://tmi.twitch.tv/group/user/${channelName}/chatters`;

async function getChatters(req, res) {
  // https://vercel.com/knowledge/how-to-enable-cors
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-methods', 'GET,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  try {
    const { channelName = 'codinggarden' } = req.query;
    const { data } = await axios.get(API_URL(channelName));
    res.send(data);
  } catch (error) {
    res.status(500);
    const response = error.response || {};
    res.send({
      message: error.message,
      response,
    });
  }
}

module.exports = getChatters;
