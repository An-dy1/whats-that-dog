require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbConnection = require('./db/connection');

const PORT = process.env.PORT || 5001;

let app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(require('./routes/guests'));
app.use(require('./routes/session'));

// GLOBAL ERROR HANDLING
app.use(function(err, _req, res) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

dbConnection.connectToServer(function(err) {
    if (err) {
        console.error(err);
        process.exit();
    }

    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});