import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

//import uuid from 'uuid';

import './App.css';
import Axios from 'axios';

export class App extends Component {
  state = {
    todos: []
  }

  // to make initial api request we must call another lifecycle method called componentDidMount()
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data })) //handles the promise and stores it in our state
      //.then(res => console.log(res.data)) //debuggin: check to see request is coming through
  }

  // toggle complete
  markComplete = (id) => {
    // setState built in method
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) // Note use backtick to get variable id 
    .then(res => this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    }));
    // code below is for local state testing (hardcoded values)
    // this.setState({ 
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    // }); // note: ... is JS6 spreader
  }

  // Add Todo
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res=> this.setState({ todos: [...this.state.todos, res.data] }))
    // code below is for local state testing (hardcoded values)
    // this.setState({ todos: [...this.state.todos, newTodo]}) // Note: ... = spreader, makes a copy of state. newTodo is holder variable 
  }

  render() {
    //console.log(this.state.todos) // log the app state
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
