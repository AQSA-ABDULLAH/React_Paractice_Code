import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TiTick, TiTimes } from 'react-icons/ti';

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
    <div className='container shadow p-5 mb-5 bg-body rounded' style={{ background: 'linear-gradient(to bottom, #f1f1f1, #dddddd)'}}>
      <h1 className="text-center">TODO LIST</h1>
      <div className="input-group mb-3 mt-3">
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

      <h3>Active ToDo</h3>
      <ol className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`list-group-item d-flex align-items-center ${
              todo.completed ? 'text-decoration-line-through' : ''
            }`}
          >
            <div className="flex-grow-1">
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
            </div>
            <div>
              {todo.isEditing ? (
                <>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => saveTodo(index)}
                  >
                    <TiTick />
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => cancelEditing(index)}
                  >
                    <TiTimes />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => startEditing(index)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => markCompleted(index)}
                  >
                    {todo.completed ? <TiTimes /> : <TiTick />}
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeTodo(index)}
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>

      <h3 className='mt-3 text-primary'>Completed ToDo</h3>
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
