require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const userRouter = require('./routes/user');

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI,)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


app.use("/user", userRouter);

app.use("/", (req, res) => {
  res.send("Hello World! This is a Todo List API.");
})

app.listen(port, () => {
  console.log(`Todo App Listening on Port: ${port}`);
})