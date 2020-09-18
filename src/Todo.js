import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
    getStyle() {
        return {
            backgroundColor: "pink",
            textDecoration: this.props.todoProp.completed
                ? "line-through"
                : "none",
            padding: "10px",
            borderBottom: "1px dotted #555"
        };
    }

    render() {
        const { id, title } = this.props.todoProp;

        return (
            <div style={this.getStyle()}>
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(null, id)}
                ></input>
                {title}
                <button
                    onClick={this.props.deleteTodo.bind(this, id)}
                    style={buttonStyle}
                >
                    x
                </button>
            </div>
        );
    }
}

const buttonStyle = {
    backgroundColor: "#0000ff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    padding: "5px 9px",
    cursor: "pointer",
    float: "right"
};

Todo.propTypes = {
    todoProp: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default Todo;
