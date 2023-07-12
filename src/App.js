import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddInList from './AddInList';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import All from './Pages/All';
import Pending from './Pages/Pending';
import InProgress from './Pages/InProgress';
import Completed from './Pages/Completed';
const App = () => {
  return (
    //---------------------------------FOR TO-DO-LIST---------------------------------------
    // <div style={{ background: 'linear-gradient( #f1f1f1, #dddddd)', height: '2000px'}} >
    //   <h1 className='text-center p-5 mb-2'>TODO LIST IN REACT JS</h1>
    //   <AddInList />
    // </div>

    //--------------------------------FOR TO-DO-LIST-PAGE-----------------------------------


    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/pending" element={<Pending />} />
          <Route exact path="/InProgress" element={<InProgress />} />
          <Route exact path="/Completed" element={<Completed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;