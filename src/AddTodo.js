import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
    state = { title: "" };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add a new task"
                    style={{ flexGrow: 1 }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit" />
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
