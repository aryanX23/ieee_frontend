import './App.css';
import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import Events from './components/Events/events';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/events' element={<Events/>} />
        <Route exact path='*' element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
