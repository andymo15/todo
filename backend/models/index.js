// const mongoose = require("mongoose");

import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/todoDB",{
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;


// mongoose.set("debug", true) // enable debugging to be printed in console
// mongoose.Promise = Promise //setting mongooses proimse to use Node's promise

// export default Todo = require("./todo");
