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
  file: {
    type: Object,
    required: true,
  },
  done: {
    type: false,
  },
  startAt: {
    date: {
      type: String,
      required: [true, 'Start date is required'],
    },
  },
  stopAt: {
    date: {
      type: String,
      required: [true, 'Start date is required'],
    },
  },
});

module.exports = new mongoose.model('Todo', Todoschema);
