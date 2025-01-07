// api/coffee.js
const express = require('express');
const app = express();

// Importiere die Kaffee-Daten
const coffeeData = require('../data/coffeeData');

// API-Route für das Abrufen von Kaffeeinformationen nach ID
app.get('/api/coffee/:id', (req, res) => {
  const { id } = req.params;

  // Suche nach dem Kaffee mit der angegebenen ID
  const coffee = coffeeData.find(coffee => coffee.id === id);

  if (coffee) {
    res.json(coffee);  // Sende die Kaffeedaten zurück
  } else {
    res.status(404).json({ error: "Coffee not found" });  // Fehler, wenn kein Kaffee gefunden wurde
  }
});
app.get('/api/coffee', (req, res) => {
  const { id } = req.params;

  // Suche nach dem Kaffee mit der angegebenen ID
  const coffee = coffeeData;

  if (coffee) {
    res.json(coffee);  // Sende die Kaffeedaten zurück
  } else {
    res.status(404).json({ error: "Coffee not found" });  // Fehler, wenn kein Kaffee gefunden wurde
  }
});

// This handler is exported so Vercel can use it as a serverless function
module.exports = app;
