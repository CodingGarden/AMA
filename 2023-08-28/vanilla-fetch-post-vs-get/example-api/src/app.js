const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.get('/todo', (req, res) => {
  res.json({
    data: [],
    queryParams: req.query,
  });
});

app.get('/todo/:id', (req, res) => {
  res.json({
    id: req.params.id,
  });
});

app.post('/todo', (req, res) => {
  // insert into a db...
  // make another API request...
  res.json({
    message: 'Client Sent this data:',
    data: req.body,
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
