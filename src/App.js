import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const App = () => {
const [data, setData] = useState("");

const getData = async() => {
  const response = await Axios.get("http://localhost:5000/todos");
  setData(response);
}

useEffect(()=>{
  getData();
  console.log("hey")
},[]);
console.log(data.data)
  return (
    <div>{data?.data?.map(todo=><li key={todo._id}>{todo.task}</li>)}</div>
  )
}

export default App;