import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo-list</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    );
}

const headerStyle = {
    background: "lightblue",
    padding: "10px",
    textAlign: "center"
};

export default Header;
