// backend/routes/automobileRoutes.js
const express = require('express');
const router = express.Router();
const Automobile = require('../models/automobile');

// Ottieni tutte le automobili (puoi filtrare per id_cliente)
router.get('/', (req, res) => {
  const idCliente = req.query.id_cliente;
  
  // Se l'id_cliente è fornito, filtra le automobili per quel cliente
  if (idCliente) {
    console.log(`🔍 Fetching automobiles for Cliente ID: ${idCliente}`);
    Automobile.getAll((err, rows) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      // Filtra le automobili per id_cliente
      const filtered = rows.filter(auto => auto.id_cliente == idCliente);
      return res.json(filtered);
    });
  } else {
    // Se id_cliente non è specificato, restituisci tutte le automobili
    Automobile.getAll((err, rows) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      return res.json(rows);
    });
  }
});

// Aggiungi una nuova automobile
router.post('/', (req, res) => {
  
  const automobile = req.body;
  Automobile.add(automobile, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json(result); // Risposta di successo
  });
});

// Aggiorna un'automobile esistente
router.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log(`🔍 Fetching automobiles for Cliente ID: ${idCliente}`);
 
  const automobile = req.body;
  Automobile.update(id, automobile, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Elimina un'automobile
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Automobile.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

module.exports = router;
