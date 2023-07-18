import React, {useState} from "react";

function BookForm({setBookForm}){
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

    return(
        <div>
            <form class="container">
                <h2>Add a book!</h2>
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
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