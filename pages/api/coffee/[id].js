// pages/api/coffee/[id].js

import coffeeData from '../../data/coffeeData'; // Import the coffee data

export default function handler(req, res) {
  const { id } = req.query; // Get the `id` parameter from the URL

  // Find the coffee by id
  const coffee = coffeeData.find(coffee => coffee.id === id);

  if (coffee) {
    res.status(200).json(coffee); // Return the coffee data
  } else {
    res.status(404).json({ error: "Coffee not found" }); // Return an error if not found
  }
}
