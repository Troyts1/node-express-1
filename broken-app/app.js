const express = require('express');
let axios = require('axios');
const app = express();
const expressError = require("./expressError")
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server is running');
}); 

app.post('/developers', async (req, res, next) => {
  try {
    const { developers } = req.body;
    if (!Array.isArray(developers)) {
      throw new expressError('Invalid input: developers array is missing.', 404);
    }

    const results = await Promise.all(developers.map(async (username) => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return { name: response.data.name, bio: response.data.bio };
    }));

    return res.json(results);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ error: 'oops, this is an error' });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});