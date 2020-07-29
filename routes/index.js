const express = require('express');

const router = express.Router();

router.get('/', (_request, response) => {
  response.render('index', { title: 'Express' });
  return null;
});

router.get('/edit', (request, response) => {
  const { red, green, blue, alpha, colorName, hex } = request.query;
  response.render('edit', {
    title: 'Edit',
    red,
    green,
    blue,
    alpha,
    colorName,
    hex,
  });
  return null;
});

module.exports = router;
