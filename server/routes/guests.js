const express = require('express');
const dbConnection = require('../db/connection');

// An instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /guests.
const guestRoutes = express.Router();

// GET guests
guestRoutes.route('/guests').get(async(req, res) => {
    // returns the current connection to the database
    const dbConnect = dbConnection.getDb();

    dbConnect
        .collection('guests')
        .find({})
        .limit(200)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching guests.');
            } else {
                // todo try: .send(result) after testing htis and see if it works
                res.status(200).json(result);
            }
        });
});

// GET guest by id
guestRoutes.route('/guests/:id').get(async(req, res) => {
    const dbConnect = dbConnection.getDb();
    const id = req.params.id;
    let foundGuest;
    let guests;

    dbConnect
        .collection('guests')
        .find({})
        .limit(200)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching guests.');
            } else {
                guests = result;
                for (let i = 0; i < guests.length; i++) {
                    if (guests[i]._id.toString() === id) {
                        foundGuest = guests[i];
                    }
                }
                foundGuest
                    ?
                    res.status(200).send(foundGuest) :
                    res.status(404).send('Guest not found');
            }
        });
});

// todo: POST guest

module.exports = guestRoutes;