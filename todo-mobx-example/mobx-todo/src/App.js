import React from 'react';
import './App.css';
import TodoForm from "./components/Form";
import Card from "./components/Card"

function App() {

  return (
    <div className="App">
      <h1>Mobx-Todo-App</h1>
      {/* pass in props */}
      <TodoForm />
      <br></br>
    </div>
  );
}

export default App;
