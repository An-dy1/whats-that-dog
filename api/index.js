const express = require('express');
const cors = require('cors');
const data = require('./resources/guests.json');

const PORT = process.env.PORT || 5001;

let app = express();
app.use(cors());
app.use(express.json());

app.get('/guests', async (req, res) => {
  res.send(data).status(200);
});

app.get('/guests/:id', async (req, res) => {
  const id = req.params.id;
  let foundGuest;
  for (let i = 0; i < data.data.length; i++) {
    if (data.data[i].id.toString() === id) {
      foundGuest = data.data[i];
    }
  }
  if (foundGuest) {
    res.send(foundGuest).status(200);
  } else {
    res.send({}).status(404);
  }
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
