import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar"
import Home from './Home';
import BookCard from "./BookCard"
import BookForm from './BookForm';
import './App.css';

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
      <NavBar />
      <Home />
      {books.map((book) => {
      return <BookCard key={book.id} book={book} updateDelete={updateDelete}/>
      })}
      <BookForm setBooks={setBooks} books={books} />
    </div>
  );
}

export default App;