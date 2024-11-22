import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <style>
        {`
          .todo-container {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
          .todo-container h2 {
            text-align: center;
            margin-bottom: 20px;
          }
          .todo-input {
            width: calc(100% - 22px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .todo-button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: block;
            width: 100%;
            margin-bottom: 20px;
          }
          .todo-button:hover {
            background-color: #0056b3;
          }
          .todo-list {
            list-style-type: none;
            padding: 0;
          }
          .todo-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ccc;
          }
          .todo-item:last-child {
            border-bottom: none;
          }
          .remove-button {
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            padding: 5px 10px;
          }
          .remove-button:hover {
            background-color: #c82333;
          }
        `}
      </style>
      <div className="todo-container">
        <h2>Todo List</h2>
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="todo-button" onClick={handleAddTodo}>Add Todo</button>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button className="remove-button" onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;