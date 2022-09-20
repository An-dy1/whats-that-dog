const express = require('express');

const sessionRoutes = express.Router();

const cookieName = 'currentUser';

// set current session
sessionRoutes.route('/session').post((req, res) => {
    res
        .cookie(cookieName, 'testing 123', { expire: 360000 + Date.now() })
        .send({ cookieName: 'testing123' })
        .status(201);
});

// get current session
sessionRoutes.route('/session').get((req, res) => {
    const message = req.cookies.currentUser ?
        req.cookies :
        { message: 'No current user' };
    res.send(message).status(200);
});

// delete session
sessionRoutes.route('/session').delete((req, res) => {
    res
        .clearCookie(cookieName)
        .send({ message: 'Removed current user session' })
        .status(200);
});

module.exports = sessionRoutes;