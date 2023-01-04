import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import todoModel from "./models/todo.js";
import mongoose from 'mongoose';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect db to mongo
mongoose.connect("mongodb://localhost:27017/todoDB",{
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

// create user schema
const todoSchema = new mongoose.Schema({
  task:{
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const todoModel = mongoose.model("Todo", todoSchema);




app.get("/todos", (req,res)=>{
  // use find to find all todos
  todoModel.find({},function(err, foundTodos){
    if (err) {
      console.log(err)
    } else {
      res.send(foundTodos)
    }
  });
})

app.get("/todos/:id",(req,res)=>{
  const id = req.params.id
  todoModel.findById(id, function(err,foundTodo){
    if (err){
      console.log(err)
    } else {
      res.send(foundTodo)
    }
  })
})

app.post("/todos", (req,res)=>{
  // add db.Todo.create
  const todo = new todoModel({
    task: req.body.task,
    completed: req.body.completed,
  });
  todo.save();
  res.send(todo);
})

app.put("/api/todos/:id", (req,res)=>{
  // find todo by ID and edit it
  const id = req.params.id
  todoModel.findByIdAndUpdate(id, {task:req.body.task,
  completed: req.body.completed}, 
    function(err,updated){
      if (err) {
        console.log(err)
      } else {
        res.send(updated)
      }    
  })
})

// app.put("todos/:id", (req,res)=>{
//   res.send("got a put request")
// })

app.delete("todos/:id", (req,res)=>{
  // find todo by ID and delete it
})



app.listen(5000, ()=>
console.log("app is running on Port 5000"))