const express = require('express');
const router = express.Router();
const todo = require('../model/todoSchema');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/create', async (req, res) => {
  try {
    const { title, desc, email, dueAt } = req.body;
    // check if neccessary fields are filled
    if (!title || !desc || !email || !dueAt) {
      res
        .status(400)
        .send(`Please fill all the fields "{ title, desc, email, dueAt }"`);
    }
    // create new todo object
    const newTodo = await new todo({});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
