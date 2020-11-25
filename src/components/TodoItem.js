import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
        // instead of this use ternery (example above)
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }

    markComplete = (e) => { // when calling a method from an event, it takes an even parameter 'e'. Use arrow function else will have to use .bind on event method call
        console.log(this.props)
    }

    render() {
        const { id, title } = this.props.todo; // JS6 destructuring
        return (
            <div style={this.getStyle()}>
            {/* different way to providing inline css
            style={itemStyle}  // where itemStyle is a variable 'const itemStyle = { backgroundColor: '#f4f4f4' }'
            or 
            style={{ backgroundColor: '#f4f4f4'}} 
            
            */}
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes. Good Practice to do. 
// Type re-enforcement for Todo objects
// Starts with the name of the class
TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
