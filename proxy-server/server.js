const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/recommendations/manga', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/recommendations/manga');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Jikan API' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
