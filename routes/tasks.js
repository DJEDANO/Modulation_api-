const express = require('express');
const router = express.Router();

// Stockage en mémoire
let tasks = [];

//  GET /tasks : liste des tâches
router.get('/', (req, res) => {
  res.json(tasks);
});

//  POST /tasks : ajouter une tâche
router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Le champ 'title' est requis." });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    done: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

//  DELETE /tasks/:id : supprimer une tâche
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Tâche non trouvée." });
  }

  const deletedTask = tasks.splice(index, 1);
  res.json({ message: "Tâche supprimée", task: deletedTask[0] });
});

module.exports = router;
