const express = require('express');

const { hasAPIKey } = require('../middlewares');

const router = express.Router();

router.use(hasAPIKey);

router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

router.get('/balloon', (req, res) => {
  res.json(['🎈']);
});

module.exports = router;
