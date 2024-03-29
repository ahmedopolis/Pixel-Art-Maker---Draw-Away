const app = require("./app");

// Load-in env variables
const dotenv = require("dotenv");
dotenv.config();

// Module to enable request via hyper text transfer protocol
const http = require("http");

// Setup server
let port = process.env.PORT || 9000;
const hostName = process.env.HOSTNAME;
if (port == null || port == "") {
  port = 9000;
}
if (hostName == null || hostName == "") {
  hostName = "localhost";
}
const localServer = http.createServer(app);

// Spin up the server
localServer.listen(port, listening);

// Callback to debug
function listening() {
  console.log(`Server is running on http://${hostName}: ${port}`);
}
