import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.static('public'));
app.use(express.json());

const API_URL = 'https://user.monocle-dev.wld.ssdgws.co.uk/api/v0/client/authorise';

app.post('/authorize', async (req, res) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to call API' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
