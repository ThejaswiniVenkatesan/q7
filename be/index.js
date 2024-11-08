// Import express
const express = require('express');

// Create an Express app
const app = express();

// Set the port for the server to listen on
const port = 5000;

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

