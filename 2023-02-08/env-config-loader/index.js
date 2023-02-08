const config = require('./config');

function db(connectionUrl) {
  return true;
}

const connected = db(config.DATABASE_URL);

console.log(config);