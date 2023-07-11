import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { RxCrossCircled } from 'react-icons/rx';

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
    <div className="container" style={{ margin: '100px' }}>
      <h2>Todo List</h2>
      <div className="input-group mb-2 mr-50">
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
      <ol className="list-group list-group-numbered">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`list-group-item ${
              todo.completed ? 'text-decoration-line-through' : ''
            }`}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
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
                      className="btn btn-success btn-sm m-2"
                      onClick={() => saveTodo(index)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm m-2"
                      onClick={() => cancelEditing(index)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary btn-sm m-2"
                      onClick={() => startEditing(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-warning btn-sm m-2"
                      onClick={() => markCompleted(index)}
                    >
                      {todo.completed ? <RxCrossCircled /> : <TiTick />}
                    </button>
                    <button
                      className="btn btn-danger btn-sm m-2"
                      onClick={() => removeTodo(index)}
                    >
                      <AiTwotoneDelete />
                    </button>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <h3>Completed Todos</h3>
      <ol className="list-group list-group-numbered">
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
