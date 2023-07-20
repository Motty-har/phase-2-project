import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar"
import Home from './Home';
import BookCard from "./BookCard"
import BookForm from './BookForm';
import './App.css';
import {Route} from "react-router-dom";

function App() {
  const [books, setBooks] = useState([])
  console.log(books)
  useEffect(() => {
    fetch(" http://localhost:3000/books")
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  function updateDelete(id){
    const newBooks = books.filter((book) => book.id !== id)
    setBooks(newBooks)
}
  return (
    <div className="App">
      <NavBar className="topnav"/><br></br>
        <Route exact path="/">
          <Home />
        </Route><br></br>
        <Route path="/books">
          {books.map((book) => {
          return <BookCard key={book.id} book={book} updateDelete={updateDelete}/>
          })}
        </Route>
        <Route path="/book-form">
          <BookForm setBooks={setBooks} books={books} />
        </Route>
      </div>
  );
}

export default App;