const http = require('http');
const https = require('https');
const url = require('url');

// Request comes in with URL
// Fire

const PORT = 3000;

const requestHandler = (request, response) => {
  let query = url.parse(request.url).query;

  if (!query) {
    response.writeHead(422, {'Content-Type': 'application/json'});
    return response.end('No url parameter specified. Pass ?url= parameter', 422);
  }

  let testUrl = query.match(/url=(.*)/)[1];
  determineRedirect(testUrl, response);
};

const determineRedirect = (testUrl, response) => {
  let request = /^https/.test(testUrl) ? https : http;

  request.get(testUrl, (res) => {
    let responseText = '';

    res.on('data', (bit) => {
      responseText += bit;
    });

    res.on('end', () => {
      let performsRedirect = res.statusCode >= 300 && res.statusCode < 400;
      let data = {redirects: performsRedirect};

      if (performsRedirect) {
        data.destination = res.headers.location;
      }

      let serverResponse = JSON.stringify(data);

      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(serverResponse);
    });
  });
}

const server = http.createServer(requestHandler);
server.listen(PORT, (err) => {
  if (err) {
    console.log('Error starting up server', err);
  }

  console.log(`Server listening on port ${PORT}`);
});
