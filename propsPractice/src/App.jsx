import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username: 'vishal',
    age: '21'
  }
     let newArr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-">Love</h1>
     <Card username="vishal"/>
     <Card username="keshri"/>
    </>
  );
}

export default App;
