import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState('');

  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, isEditing: false, completed: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    const removedTodo = updatedTodos.splice(index, 1)[0];
    setTodos(updatedTodos);

    if (removedTodo.completed) {
      const updatedCompletedTodos = completedTodos.filter(
        (todo) => todo.text !== removedTodo.text
      );
      setCompletedTodos(updatedCompletedTodos);
    }
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

    if (updatedTodos[index].completed) {
      const completedTodo = updatedTodos[index];
      setCompletedTodos([...completedTodos, completedTodo]);
    } else {
      const updatedCompletedTodos = completedTodos.filter(
        (todo) => todo.text !== updatedTodos[index].text
      );
      setCompletedTodos(updatedCompletedTodos);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add Todo
        </button>
      </div>

      <h3>Active Todos</h3>
      <ol className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`list-group-item ${
              todo.completed ? 'text-decoration-line-through' : ''
            }`}
          >
            {todo.isEditing ? (
              <input
                type="text"
                className="form-control"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            {todo.isEditing ? (
              <>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => saveTodo(index)}
                >
                  Save
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => cancelEditing(index)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => markCompleted(index)}
                >
                  {todo.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                </button>
              </>
            )}
          </li>
        ))}
      </ol>

      <h3>Completed Todos</h3>
      <ol className="list-group">
        {completedTodos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item text-decoration-line-through"
          >
            {todo.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
