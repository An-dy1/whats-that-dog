import data from './resources/guests.json';
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5005;

let app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/guests', async (req, res) => {
  res.send(data).status(200);
});

app.get('/guests/:id', async (req, res) => {
  res.send({ data: data.id === req.params.id }).status(200);
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
