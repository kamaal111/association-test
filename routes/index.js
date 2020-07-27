const express = require('express');

const router = express.Router();

router.get('/', (_request, response) => {
  response.render('index', { title: 'Express' });
  return null;
});

router.get('/edit', (request, response) => {
  const { red, green, blue, colorName } = request.query;
  response.render('edit', { title: 'Edit', red, green, blue, colorName });
  return null;
});

module.exports = router;
