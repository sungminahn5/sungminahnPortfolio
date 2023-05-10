const express = require('express');
const app = express();
const experiences = require('./routes/experiences');

app.use('/api/experiences', experiences);

app.get('/api', (req, res) => {
  res.send('test');
});

app.listen(8080);