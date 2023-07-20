import React, {useState} from "react";

function BookCard({book, updateDelete}){
    const {id, title, image, author, read} = book
    const [isRead, setIsRead] = useState(read)
    console.log(isRead)
    function handleDelete(){
      fetch(`http://localhost:3000/books/${id}`,{
        method: "DELETE",
      })
      updateDelete(id)
    }
    function handleRead(){
      const updateObj = {
        [Object.keys(book)[3]]: setIsRead(!isRead)
      }
      fetch(`http://localhost:3001/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateObj),
      })
        .then((r) => r.json())
        .then(() => console.log("completed"));
    }
    return(
        <div class="card">
            <h1 class="book-title">{title}</h1>
            <img src={image} class="book-img" alt=""/>
            <p class="book-author">Author: {author}</p>
            <button class="read-button" onClick={handleRead}>{isRead === true ? "Read" : "Read Me"}</button>
            <button class="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BookCard