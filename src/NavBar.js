import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
      <div className="topnav">
        <NavLink
            exact to="/"
            activeStyle={{
              background: "maroon",
            }}>
          Home
        </NavLink>
        <NavLink
            to="/books"
            activeStyle={{
              background: "maroon",
            }}>
          Books
        </NavLink>
        <NavLink
            to="/add-book"
            activeStyle={{
              background: "maroon",
            }}>
          Add Book
        </NavLink>
      </div>
    )
}

export default NavBar