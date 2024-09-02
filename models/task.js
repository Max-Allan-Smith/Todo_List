const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    required: true
  },
  priorityDescription: {
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  userId: {
    type: Number,
    required: true
  },
}, 
{
  timestamps: true
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
