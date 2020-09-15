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
        const that = this;
        return (
            <div style={this.getStyle()}>
                <input
                    // style={{ display: "inline-block" }}
                    type="checkbox"
                    onChange={this.props.markCompleteFromTodos.bind(
                        null,
                        this.props.todoProp.id,
                        that
                    )}
                ></input>
                {this.props.todoProp.title}
            </div>
        );
    }
}

Todo.propTypes = {
    todoProp: PropTypes.object.isRequired
};

export default Todo;