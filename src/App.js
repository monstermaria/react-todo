import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import About from "./About";
import "./App.css";
import axios from "axios";

class App extends Component {
    state = {
        todos: [
            // {
            //     id: uuid(),
            //     title: "Göra inlämningsuppgift",
            //     completed: false
            // },
            // {
            //     id: uuid(),
            //     title: "Sova",
            //     completed: false
            // },
            // {
            //     id: uuid(),
            //     title: "Äta godis",
            //     completed: false
            // }
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
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                this.setState({
                    todos: this.state.todos.filter((todo) => {
                        return todo.id !== id;
                    })
                });
            });
    };

    addTodo = (title) => {
        // const newTodo = {
        //     id: uuid(),
        //     title: title,
        //     completed: false
        // };
        // this.setState({ todos: [...this.state.todos, newTodo] });

        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title,
                completed: false
            })
            .then((res) =>
                this.setState({ todos: [...this.state.todos, res.data] })
            );
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => this.setState({ todos: res.data }));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route
                        exact
                        path="/"
                        render={(props) => {
                            return (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        markComplete={this.markComplete}
                                        deleteTodo={this.deleteTodo}
                                    />
                                </React.Fragment>
                            );
                        }}
                    />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
