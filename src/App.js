import './App.css';
import TodoInputBox from "./Components/TodoInputBox/TodoInputBox";
import Todos from "./Components/Todos/Todos";
import React from "react";

function App() {
  return (
    <div className="App">
        <TodoInputBox/>
        <Todos/>
    </div>
  );
}

export default App;
