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
    return(
        <div class="card">
            <h1 class="book-title">Title:   {title}</h1>
            <img src={image} class="book-img" alt=""/>
            <p class="book-author">Author: {author}</p>
            <button class="read-button" onClick={() => setIsRead(!isRead)}>{read === false ? "Read Me" : "Read"}</button>
            <button class="delete" onClick={handleDelete}>Delete</button>

        </div>
    )
}

export default BookCard