const express = require('express');

const tasksControler = require('./controllers/tasksControler');

const router = express.Router();

router.get('/cliente', tasksControler.getAll);
router.get('/produto', tasksControler.getAll);
// router.post('/cliente', tasksControler.createUser);

module.exports = router;