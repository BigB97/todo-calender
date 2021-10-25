const express = require('express');
const router = express.Router();
const Todo = require('../model/todoSchema');
const upload = require('../utils/upload');

/* GET home page. */
router.get('/', (req, res) => {
  res.send({ title: 'Express' });
});

router.post('/create', upload('file'), async (req, res) => {
  try {
    const { title, desc, startAt, stopAt } = req.body;
    // create new todo object
    const newTodo = await Todo.create({
      title,
      desc,
      'startAt.date': startAt,
      'stopAt.date': stopAt,
      file: req.body.file,
    });
    return res.status(200).send(newTodo);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/todo', async (req, res) => {
  try {
    const { title, desc, startAt, stopAt } = req.body;
    // create new todo object
    const newTodo = await Todo.create({
      title,
      desc,
      'startAt.date': startAt,
      'stopAt.date': stopAt,
      file: req.body.file,
    });
    return res.status(200).send(newTodo);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
