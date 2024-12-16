const express = require('express');
const app = express();
// Simulate database interaction (replace with your actual database code)
async function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 'error') {
        reject(new Error('Database query failed'));
      } else {
        resolve({ id: id, name: `User ${id}` });
      }
    }, 500);
  });
}
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUser(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));