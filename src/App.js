import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoTitle from './Components/TodoTitle';
import TodoForm from './Components/TodoForm';

function App() {
  const [toDos, setToDos] = useState([]);
  const [count, setCount] = useState(0);
  const [newToDo, setNewToDo] = useState('');

  useEffect(() => {
    setCount(toDos.length);
  }, [toDos]); // Empty dependency array ensures this effect runs only once

  const addToDo = () => {
    if (!newToDo) return; // Don't add empty tasks
    setToDos([...toDos, newToDo]);
    setNewToDo(''); // Clear the input after adding
  };

  const deleteToDo = (index) => {
    setToDos(toDos.filter((_, toDoIndex) => toDoIndex !== index));
  };

  // Defined render function
  const render = () => {
    return (
      <div className="app">
        <TodoTitle title="To-Do Demo" count={count} />
        <TodoForm value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          onClick={addToDo} />
        <TodoList toDos={toDos} onDelete={deleteToDo} />
      </div>
    );
  };

  // Call the render function
  return render();
}

export default App;