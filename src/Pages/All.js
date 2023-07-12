import React from 'react';
import Navbar from '../components/Navbar';

export default function All() {
  return (
    <div>
      <Navbar />

      <div className="container mt-3">
        <div className="row">
          <div className="col" style={{ borderRight: '1px solid #ccc' }}>
            <h2>Pending</h2>
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
                   <p>I have to work on task with my Life</p> 
          </div>
          <div className="col" style={{ borderRight: '1px solid #ccc' }}>
            <h2>Incomplete</h2>
            {/* Content for the "Incomplete" column goes here */}
          </div>
          <div className="col">
            <h2>Progress</h2>
            {/* Content for the "Progress" column goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}
