// Express to run server and routes
const express = require("express");

// HTTP assertions https://www.npmjs.com/package/supertest
const request = require("supertest");

// Start up an instance of app
const app = express();

/* Dependencies & Middleware */
const bodyParser = require("body-parser");
const cors = require("cors");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance for proxy server
app.use(cors());

// Connect the bundled folder
app.use(express.static("dist"));

// Export 'app.js'
module.exports = app;
