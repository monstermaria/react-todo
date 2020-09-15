import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo-list</h1>
        </header>
    );
}

const headerStyle = {
    background: "olive",
    padding: "10px",
    textAlign: "center"
};

export default Header;
