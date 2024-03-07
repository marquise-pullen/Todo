import React from 'react';
import Todo from './Todo';
import './TodoList.css'

const TodoList = ({ toDos, onDelete }) => {
    return (
        <ul className="todo-list">
            {toDos.map((todo, index) => (
                <Todo key={index} todo={todo} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    );
};

export default TodoList;
