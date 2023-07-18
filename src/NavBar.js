import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    const styling = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    }
    return(
      <div>
        <NavLink
            to="/"
            style={styling}>
            Home
        </NavLink>
        <NavLink
            to="/books"
            style={styling}>
            Books
        </NavLink>
        <NavLink
            to="/book-form"
            style={styling}>
            Add Book
        </NavLink>
      </div>
    )
}

export default NavBar