const mongoose = require('mongoose');
const Todoschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  done: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  dueAt: { type: String, required: true },
});

module.exports = new mongoose.model('Todo', Todoschema);
