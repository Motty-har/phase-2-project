import React, {useEffect, useState} from 'react';
import Home from './Home';
import NavBar from "./NavBar"
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
