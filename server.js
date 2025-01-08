const express = require('express');
const cors = require('cors');
const coffeeData = require('./data/coffeeData'); // Adjust the path as necessary

const app = express();
const PORT = 3003;

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON requests (optional, if needed for POST/PUT)
app.use(express.json());

// Route to get all coffee or a specific coffee by ID
app.get('/api/coffee/:id?', (req, res) => {
  const { id } = req.params;

  if (id) {
    // Find coffee by ID
    const coffee = coffeeData.find((coffee) => coffee.id === id);
    if (coffee) {
      res.status(200).json(coffee);
    } else {
      res.status(404).json({ error: 'Coffee not found' });
    }
  } else {
    // Return all coffee data if no ID is specified
    res.status(200).json(coffeeData);
  }
});

// Handle invalid routes
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
