import './App.css';
import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import Events from './components/Events/events';
function App() {
  return (
      <div className="App">
          <Routes>
              <Route exact path="/ieee_frontend/" element={<Home />} />
              <Route exact path="/ieee_frontend/events/" element={<Events />} />
              <Route
                  exact
                  path="*"
                  element={<Navigate to="/ieee_frontend/" replace={true} />}
              />
          </Routes>
      </div>
  );
}

export default App;
