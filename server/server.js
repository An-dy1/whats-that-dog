const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5001;

let app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(require('./routes/guests'));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));