import React from 'react';

const Todo = ({ todo, onDelete }) => {
    return (
        <li>
            {todo}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default Todo;