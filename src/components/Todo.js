import React from 'react'

const Todo = (props) =>{
    const handleClick =() =>{
        props.handleItemToggle(props.item.id)
        console.log("clicked")
    }
    return (
        <div className={`item ${props.item.completed ? 'completed' : ""}`} onClick={handleClick}>
            <p>{props.item.task}</p>
            
        </div>
    )
}

export default Todo