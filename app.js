const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/data', async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  res.json(response.data);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});