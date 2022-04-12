// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Input from "./components/Input/Input";
import Task from "./components/tasklist/Task";
import React, { useState } from "react";

function App() {

  let [state, setState] = useState('');
  let [taskItems, updateTaskItems] = useState([]);

  return (
    <div className="App">

      {/* <h1>Hello world</h1> */}
      <Input state={state} setState={setState} updateTaskItems={updateTaskItems} />

      <Task taskItems={taskItems} updateTaskItems={updateTaskItems} />



    </div>
  );
}

export default App;
