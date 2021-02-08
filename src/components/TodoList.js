import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {
    constructor() {
        super()
    }
    render() {
        
        return (
            <div>
            {
            this.props.todos.map(item =>(
                <Todo handleItemToggle={this.props.handleItemToggle} key={item.id} item={item}/>

            ))}
            </div>
        )
    }
}

