import React, { Component } from "react";
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

    render() {
        return (
            <div className="App">
                <Todos
                    todos={this.state.todos}
                    markCompleteFromApp={this.markComplete}
                />
            </div>
        );
    }
}

export default App;
