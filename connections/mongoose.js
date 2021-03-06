const mongoose = require('mongoose');


let options = {
    useMongoClient: true,
    // autoIndex: false, // Don't build indexes
    // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    // reconnectInterval: 500, // Reconnect every 500ms
    // poolSize: 10, // Maintain up to 10 socket connections
    // // If not connected, return errors immediately rather than waiting for reconnect
    // bufferMaxEntries: 0
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/integer', options);

module.exports = mongoose;