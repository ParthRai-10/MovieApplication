// server.js

const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Define routes
  if (req.method === 'GET') {
    switch (req.url) {
      case '/movies':
        res.writeHead(200);
        res.end(JSON.stringify({ message: "All Movies Data in JSON format from Mongo DB" }));
        break;

      case '/genres':
        res.writeHead(200);
        res.end(JSON.stringify({ message: "All Genres Data in JSON format from Mongo DB" }));
        break;

      case '/artists':
        res.writeHead(200);
        res.end(JSON.stringify({ message: "All Artists Data in JSON format from Mongo DB" }));
        break;

      default:
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
        break;
    }
  } else {
    // If not a GET request
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

// Define the port
const PORT = 9000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// CONNECTING DATABASE

const mongoose = require("mongoose");
const { DB_URL } = require('./config/db.config'); // Import DB URL from dbconfig

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Cannot connect to the database!", err);
    process.exit(1); // Exit the process with an error code
  });