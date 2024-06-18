const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory data structure to store data
const dataStore = {};

// Endpoint to receive data
app.post('/api/data', (req, res) => {
  const { key, value } = req.body;

  // Store data in the data structure
  dataStore[key] = value;

  res.status(200).send({ message: 'Data received and stored successfully' });
});

// Endpoint to retrieve processed data
app.get('/api/data', (req, res) => {
  res.status(200).json(dataStore);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
