const express = require('express');


// Import our db connection
const db = require('./db/connection');

// Import routes


const app = express();
const PORT = process.env.PORT || 3333;

// Middleware

// Allow to send json in a request
app.use(express.json()); 
// Allow standard encoded form data submissions
app.use(express.urlencoded({ extended: true }));
// Allow to access any folders or files in public 
app.use(express.static('public')); 



// Connect to the db
db.sync({ force: false })
  .then(() => {
    // Start server
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
  });