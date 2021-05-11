const app = require("./app");

// Module to enable request via hyper text transfer protocol
const http = require("http");

// Setup server
const port = 7000;
const hostName = "localhost";
const localServer = http.createServer(app);

// Spin up the server
localServer.listen(port, listening);

// Callback to debug
function listening() {
  console.log(`Server is running on http://${hostName}: ${port}`);
}
