import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bodyParser.json())


app.get("/getData", (req,res)=>{
  res.send("Hello World")
});

app.get("/todos", (req,res)=>{
  // use Todo.find to find all todos
})

app.post("/todos", (req,res)=>{
  // add db.Todo.create
})

app.put("todos/:id", (req,res)=>{
  // find todo by ID and edit it
})

app.delete("todos/:id", (req,res)=>{
  // find todo by ID and delete it
})



app.listen(5000, ()=>
console.log("app is running on Port 5000"))