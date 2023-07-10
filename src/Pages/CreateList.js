import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, isEditing: false, completed: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isEditing = true;
    setTodos(updatedTodos);
    setEditingIndex(index);
    setEditedTodo(updatedTodos[index].text);
  };

  const cancelEditing = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isEditing = false;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditedTodo('');
  };

  const saveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editedTodo;
    updatedTodos[index].isEditing = false;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditedTodo('');
  };

  const markCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.isEditing ? (
              <input
                type="text"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
            ) : (
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </span>
            )}
            {todo.isEditing ? (
              <>
                <button onClick={() => saveTodo(index)}>Save</button>
                <button onClick={() => cancelEditing(index)}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => removeTodo(index)}>Remove</button>
                <button onClick={() => markCompleted(index)}>
                  {todo.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;