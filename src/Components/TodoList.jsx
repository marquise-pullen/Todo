import React from 'react';
import Todo from './Todo';

const TodoList = ({ toDos, onDelete }) => {
    return (
        <ul className="task-list">
            {toDos.map((todo, index) => (
                <Todo key={index} todo={todo} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    );
};

export default TodoList;
