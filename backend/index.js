const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.json())

app.get("/getData", (req,res)=>{
  res.send("Hello World")
})

app.listen(5000, ()=>
console.log("app is running on Port 5000"))