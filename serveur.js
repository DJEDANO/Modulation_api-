const express = require('express');
const app = express();
const port = 3000;

// Middleware global
app.use(express.json());

// Importer les routes de tasks
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(` Serveur démarré sur http://localhost:${port}`);
});
