import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            {
            this.props.todos.map(item =>(
                <Todo handleItemToggle={this.props.handleItemToggle} key={item.id} item={item}

            ))}
            </div>
        )
    }
}
