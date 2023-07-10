import React from 'react';
import AddInList from './AddInList';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <AddInList />
    </div>
  );
};

export default App;