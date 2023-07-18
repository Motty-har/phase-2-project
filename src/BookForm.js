import React, {useState} from "react";

function BookForm(){
    return(
        <div>
            <form class="container">
                <h2>Add a book!</h2>
                <input placeholder="Title"></input>
                <input placeholder="Image"></input>
                <input placeholder="Author"></input>
                <label for="isRead">Have you read it?</label>
                <select id="isRead">
                    <option value={true}>Yes</option>
                    <option value={false}>Not Yet</option>       
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookForm