const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const { name, description, priority, priorityDescription, category, userId } = req.body;

    const newTask = new Task({
      name,
      description,
      priority,
      priorityDescription,
      category,
      userId
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error creating task:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (err) {
    console.error('Error fetching task by ID:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { name, description, priority, priorityDescription, category } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (name) task.name = name;
    if (description) task.description = description;
    if (priority) task.priority = priority;
    if (priorityDescription) task.priorityDescription = priorityDescription;
    if (category) task.category = category;

    await task.save();
    res.status(200).json(task);
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.deleteOne();
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
