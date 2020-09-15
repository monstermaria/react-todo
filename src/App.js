import React, { Component } from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import "./App.css";

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Göra inlämningsuppgift",
                completed: false
            },
            {
                id: 2,
                title: "Sova",
                completed: false
            },
            {
                id: 3,
                title: "Äta godis",
                completed: true
            }
        ]
    };

    // toggle complete
    markComplete = (id, that) => {
        console.log(that);
        console.log(that.props);
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.id !== id;
            })
        });
    };

    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        };

        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos
                    todos={this.state.todos}
                    markCompleteFromApp={this.markComplete}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    }
}

export default App;
