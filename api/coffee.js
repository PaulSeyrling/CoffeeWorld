// api/coffee.js
const coffeeData = require('../../data/coffeeData');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { id } = req.query;

  if (req.method === 'GET') {
    if (id) {
      // Return specific coffee by ID
      const coffee = coffeeData.find(coffee => coffee.id === id);
      if (coffee) {
        res.status(200).json(coffee);
      } else {
        res.status(404).json({ error: "Coffee not found" });
      }
    } else {
      // Return all coffees if no ID is specified
      res.status(200).json(coffeeData);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

