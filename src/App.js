import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar"
import Home from './Home';
import BookCard from "./BookCard"
import BookForm from './BookForm';
import './App.css';


function App() {
  const [books, setBooks] = useState([])
  const [bookForm, setBookForm] = useState([])
  console.log(bookForm)
  useEffect(() => {
    fetch(" http://localhost:3000/books")
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  console.log(books)
  return (
    <div className="App">
      <NavBar />
      <Home />
      {books.map((book) => {
      return <BookCard key={book.id} book={book}/>
      })}
      <BookForm setBookForm={setBookForm}/>
    </div>
  );
}

export default App;