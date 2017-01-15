const express = require('express');
const request = require('request');
const PORT = 3000;

const app = express();

app.use(ensureUrl);
app.use(determineIfUrlRedirects);

app.get('/', function(req, res) {
  res.json(req.redirectTest);
});

app.listen(PORT, function () {
  console.log(`Server up and running on port ${PORT}`);
});

function ensureUrl(req, res, next) {
  if (!req.query.url) {
    res.writeHead(422);
    return res.end(JSON.stringify({error: 'Must supply url parameter'}));
  }

  next();
};

function determineIfUrlRedirects(req, res, next) {
  const url = req.query.url;
  const responseData = {};
  const requestParams = {
    url: url,
    followRedirect: false
  };

  request(requestParams, function(err, response, body) {
    if (err) {
      return res.json({error: err.message});
    }

    req.redirectTest = {};
    req.redirectTest.result = response.statusCode >= 300 && response.statusCode < 400;
    req.redirectTest.location = response.headers.location || null;

    next();
  });
};