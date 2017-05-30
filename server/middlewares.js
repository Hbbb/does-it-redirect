const request = require('request');

function ensureUrlPresent(req, res, next) {
  if (!req.query.url) {
    res.writeHead(422);
    return res.end(JSON.stringify({error: 'Must supply url parameter'}));
  }

  return next();
};

function determineIfUrlRedirects(req, res, next) {
  const url = req.query.url;
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

    return next();
  });
};

function log(req, res, next) {
  console.log('Request', req.url);
  return next();
};

module.exports = {
  log,
  determineIfUrlRedirects,
  ensureUrlPresent
}
