import React from 'react';
import AddInList from './AddInList';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
const App = () => {
  return (
    <div style={{ background: 'linear-gradient( #f1f1f1, #dddddd)', height: '1000px'}} >
      <h1 className='text-center p-5 mb-2'>TODO LIST IN REACT JS</h1>
      <AddInList />
    </div>
  );
};

export default App;