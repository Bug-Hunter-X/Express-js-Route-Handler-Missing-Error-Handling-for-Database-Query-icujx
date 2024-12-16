const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling for missing user
  }
  res.send(user); // Missing error handling if database query fails
});