import React, {useEffect, useState} from 'react';
import Home from './Home';
import NavBar from "./NavBar"
import BookCard from './BookCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <BookCard />
    </div>
  );
}

export default App;
