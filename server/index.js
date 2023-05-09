const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('test');
});

app.listen(1234);