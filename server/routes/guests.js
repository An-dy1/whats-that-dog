const express = require('express');
const data = require('../resources/guests.json');
const dbConnection = require('../db/connection');

// An instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /guests.
const guestRoutes = express.Router();

// todo: database connection import

// GET guests
guestRoutes.route('/guests').get(async(req, res) => {
    // returns the current connection to the database
    const dbConnect = dbConnection.getDb();

    dbConnect
        .collection('guests')
        .find({})
        .limit(50)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching guests.');
            } else {
                // todo try: .send(result) after testing htis and see if it works
                res.status(200).json(result);
            }
        });
});

// GET guests by id
guestRoutes.route('/guests/:id').get(async(req, res) => {
    const id = req.params.id;
    let foundGuest;
    for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].id.toString() === id) {
            foundGuest = data.data[i];
        }
    }

    foundGuest
        ?
        res.status(200).send(foundGuest) :
        res.status(404).send('Guest not found');
});

module.exports = guestRoutes;