import React from 'react';

const TodoForm = ({ newTask, onChange, onClick }) => {

    return <div className="task-input">
        <input
            type="text"
            value={newTask}
            onChange={onChange}
            placeholder="Add a new task"
        />
        <button onClick={onClick}>Add</button>
    </div>
};

export default TodoForm;