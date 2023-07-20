import React, {useState} from "react";

function BookCard({book, updateDelete}){
    const {id, title, image, author, read} = book
    const [isRead, setIsRead] = useState(read)
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
        <div className="card">
            <h1 className="book-title">{title}</h1>
            <img src={image} className="book-img" alt=""/>
            <p className="book-author">Author: {author}</p>
            <button onClick={handleRead}>{isRead === true ? "Read" : "Read Me"}</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BookCard