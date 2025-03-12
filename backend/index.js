index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa cors
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');
const automobileRoutes = require('./routes/automobileRoutes');
const garageRoutes = require('./routes/garageRoutes');

app.use(cors()); // Aggiungi questa linea per abilitare CORS
app.use(bodyParser.json());
app.use('/api/clienti', clienteRoutes);
app.use('/api/automobili', automobileRoutes);
app.use('/api/garage', garageRoutes);

const PORT = 3000; // Assicurati che la porta sia impostata correttamente
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
