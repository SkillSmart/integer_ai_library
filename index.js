const express = require('express');
const mongoose = require('./connections/mongoose');
// Middleware Imports
const bodyParser = require('body-parser');


const app = express();

// Apply Middleware
app.use(bodyParser.json({ type: '*/*' }));

// Add Routing
require('./routes')(app);

// Deploy Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server started successfully on port ", port);
});
