const express = require('express');
const dbConnection = require('../db/connection');
const ObjectId = require('bson').ObjectID;

// An instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /guests.
const guestRoutes = express.Router();

// todo: improvement - could I have more specific error handling?

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
                    res.status(404).send('Guest not found.');
            }
        });
});

// POST guest
guestRoutes.route('/guests').post(function(req, res) {
    // returns the current connection to the database
    const dbConnect = dbConnection.getDb();
    const guestDocument = {
        firstName: req.body.firstName,
        lastname: req.body.lastName,
        plusOne: req.body.plusOne,
        isComing: req.body.isComing,
        plusOneDetails: req.body.plusOneDetails,
        plusOneIsComing: req.body.plusOneIsComing,
    };

    dbConnect.collection('guests').insertOne(guestDocument, (err, result) => {
        if (err) {
            res.status(400).send('Error inserting guest into database.');
        } else {
            res.status(201).send(`Created document with id ${result.insertedId}`);
        }
    });
});

// todo: improvement - there must be a better way to do this
function generateUpdateObject(requestBody) {
    let updates = {};
    let plusOneDetailsNew = {};
    if (requestBody.firstName) {
        updates.firstName = requestBody.firstName;
    }
    if (requestBody.lastName) {
        updates.lastName = requestBody.lastName;
    }
    if (requestBody.plusOne) {
        updates.plusOne = requestBody.plusOne;
    }
    if (requestBody.isComing) {
        updates.isComing = requestBody.isComing;
    }
    if (requestBody.plusOneDetails) {
        plusOneDetailsNew.firstName = requestBody.plusOneDetails.firstName;
        plusOneDetailsNew.lastName = requestBody.plusOneDetails.lastName;
        updates.plusOneDetails = plusOneDetailsNew;
    }
    if (requestBody.plusOneIsComing) {
        updates.plusOneIsComing = requestBody.plusOneIsComing;
    }

    return updates;
}

// UPDATE guest record by id
guestRoutes.route('/guests/:id').post(function(req, res) {
    const dbConnect = dbConnection.getDb();
    const guestsQuery = { _id: ObjectId(req.params.id) };

    // todo: question - the `generateUpdateObject` method is synchronous - am I creating a weird race condition here by not making it asynchronous and awaiting its value?
    const updates = {
        $set: generateUpdateObject(req.body),
    };

    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };

    dbConnect
        .collection('guests')
        .updateOne(guestsQuery, updates, options, function(err, result) {
            if (err) {
                res
                    .status(400)
                    .send(
                        `There was an issue updating the record with id ${guestsQuery._id}.`
                    );
            } else {
                console.log(`Updated guest record with id ${guestsQuery._id}.`);
                res
                    .status(201)
                    .send(`Updated guest record with id ${guestsQuery._id}.`);
            }
        });
});

// DELETE guest by id
guestRoutes.route('/guests/:id').delete(function(req, res) {
    const dbConnect = dbConnection.getDb();
    const guestsQuery = { _id: ObjectId(req.params.id) };

    dbConnect.collection('guests').deleteOne(guestsQuery, (err, _result) => {
        if (err) {
            res.status(400).send(`Error updating record with id ${guestsQuery._id}.`);
        } else {
            res.status(200).send(`Deleted listing with id ${guestsQuery._id}.`);
        }
    });
});

module.exports = guestRoutes;