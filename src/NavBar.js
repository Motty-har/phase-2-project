import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    const styling = {
        // margin: ".5px .5px",
        // background: "black",
        // textDecoration: "none",
        // color: "white",
        // fontSize: "17px",
        // width: "200px",
        // border: "1px solid maroon",
        // display: "block",
        // padding: "8px"
    }
    return(
      <div className="topnav">
        <NavLink
            to="/"
            exact style={styling}
            activeStyle={{
                background: "maroon",
              }}>
            Home
        </NavLink>
        <NavLink
            to="/books"
            exact style={styling}
            activeStyle={{
                background: "maroon",
              }}>
            Books
        </NavLink>
        <NavLink
            to="/book-form"
            exact style={styling}
            activeStyle={{
                background: "maroon",
              }}>
            Add Book
        </NavLink>
      </div>
    )
}

export default NavBar