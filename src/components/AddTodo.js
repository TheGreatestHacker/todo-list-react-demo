import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ 
        [e.target.name]: e.target.value 
    });

    onSubmit = (e) => {
        e.preventDefault(); //prevent submission to actual file. Defualt on JS
        this.props.addTodo(this.state.title); // call props method to pass this up
        this.setState({ title: '' }) // clear the form field
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name="title"
                style={{ flex: '10', padding: '5px' }} 
                placeholder="Add Todo ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex: '1'}} 
                />
            </form>
        )
    }
}

AddTodo.protoTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo