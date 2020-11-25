import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
    markComplete = () => {
        console.log('Hello')
    }

    render() {
        return this.props.todos.map((todo) => (
            // <h3>{ todo.title }</h3>
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

// PropTypes. Good Practice to do. 
// Type re-enforcement for Todo objects
Todos.protoTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
    
}

export default Todos