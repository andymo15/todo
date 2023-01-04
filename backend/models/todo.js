// const mongoose = require("mongoose");
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const todoModel = mongoose.model("Todo", todoSchema) // creating the model from the schema

//module.exports = todoModel; //exporting the module

export default todoModel;