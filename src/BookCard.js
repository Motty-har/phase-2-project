import React, {useState} from "react";

function BookCard({book}){
    const {title, image, author, read} = book
    const [isRead, setIsRead] = useState(read)
    
    return(
        <div class="card">
            <h1 class="book-title">Title: </h1>
            <img src={} class="book-img"/>
            <p class="book-author">Author: {author}</p>
            <button class="button" onClick={() => setIsRead(!isRead)}>{isRead === false ? "Read Me" : "Read"}</button>

        </div>
    )
}

export default BookCard