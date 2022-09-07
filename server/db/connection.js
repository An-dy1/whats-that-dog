const { MongoClient } = require('mongodb');
const atlasConnectionString = process.env.ATLAS_URI;
const client = new MongoClient(atlasConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

function connectToServer(callback) {
    client.connect((err, database) => {
        if (err || !database) {
            return callback(err);
        }

        dbConnection = database.db('whats-that-dog');
        console.log('Successfully connected to MongoDB');

        return callback();
    });
}

function getDb() {
    return dbConnection;
}

module.exports = {
    connectToServer,
    getDb,
};