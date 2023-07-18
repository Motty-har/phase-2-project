import React, {useEffect, useState} from 'react';
import Home from './Home';
import NavBar from "./NavBar"
import BookCard from './BookCard';
import './App.css';


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(" http://localhost:3000/books")
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Home />
      <BookCard />
    </div>
  );
}

export default App;
