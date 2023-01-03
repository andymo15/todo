const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo-app",{
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true) // enable debugging to be printed in console
mongoose.Promise = Promise //setting mongooses proimse to use Node's promise

module.exports.Todo = require("./todo");

const db = require("../models");