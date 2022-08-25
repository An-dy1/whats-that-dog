const express = require('express');
const data = require('../resources/guests.json');

// An instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /guests.
const guestRoutes = express.Router();

// todo: database connection import

// GET guests
guestRoutes.route('/guests').get(async(req, res) => {
    data
        ?
        res.status(200).send(data) :
        res.status(404).send(`Sorry, there's no data here`);
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