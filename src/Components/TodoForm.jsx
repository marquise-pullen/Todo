import React from 'react';
import './TodoForm.css'

const TodoForm = ({ newTodo, onChange, onClick }) => {

    return <div className="todo-input">
        <input
            type="text"
            value={newTodo}
            onChange={onChange}
            placeholder="Add a new todo"
        />
        <button onClick={onClick}>Add</button>
    </div>
};

export default TodoForm;