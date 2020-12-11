const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('Health is 100%.');
})

app.listen(3000, () => {
  console.log('Node.js application is listening on port 3000');
})