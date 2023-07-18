import React, {useState} from "react";

function BookForm({setBooks, books}){
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [isRead, setIsRead] = useState(true)
    const newObj = {
        "title": title,
        "image": image,
        "author": author,
        "read": isRead
    }
    function handleChange(e){
        setIsRead(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
              },
            body: JSON.stringify(newObj)
        })
        .then(r => r.json())
        .then(data => setBooks([...books, data]))
        reset()
    }
    return(
        <div>
            <form class="container" onSubmit={handleSubmit}>
                <h2>Add a book!</h2>
                <input placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
                <input placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <label for="isRead">Have you read it?</label>
                <select id="isRead" onChange={handleChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>Not Yet</option>       
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookForm