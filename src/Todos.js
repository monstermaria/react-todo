import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

class Todos extends Component {
    render() {
        const todos = this.props.todos;
        return (
            <div>
                {todos.map((todoItem) => {
                    return (
                        <Todo
                            key={todoItem.id}
                            todoProp={todoItem}
                            markCompleteFromTodos={
                                this.props.markCompleteFromApp
                            }
                        ></Todo>
                    );
                })}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todos;
