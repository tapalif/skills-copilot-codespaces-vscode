// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request for /comments');
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request for /comments');
});

// Create a route for PUT /comments
app.put('/comments', (req, res) => {
  res.send('This is a PUT request for /comments');
});

// Create a route for DELETE /comments
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request for /comments');
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});