const express = require('express');
const {ensureUrlPresent, determineIfUrlRedirects} = require('./middlewares');

const PORT = 3000;
const app = express();

app.use(ensureUrlPresent);
app.use(determineIfUrlRedirects);

app.get('/', function(req, res) {
  res.json(req.redirectTest);
});

app.listen(PORT, function () {
  console.log(`Server up and running on port ${PORT}`);
});
