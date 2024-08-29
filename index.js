const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const userRouter = require('./routes/user');

app.use(bodyParser.json());

app.use("/user", userRouter);

app.use("/", (req, res) => {
  res.send("Hello World! This is a Todo List API.");
})

app.listen(port, () => {
  console.log(`Todo App Listening on Port: ${port}`);
})