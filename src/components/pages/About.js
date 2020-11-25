import React from 'react'

// <React.Fragment> is a ghost element that wont appear in the DOM. JSX just needs everthing wrapped around by a parent element
export default function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
        </React.Fragment>
    )
}
