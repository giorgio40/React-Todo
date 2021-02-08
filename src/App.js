import React from 'react';


const todos = [{
  task: "walk the dog",
  id: Date.now(),
  complete:false
},
{
  task:"goto the grocery store",
  id: Date.now(),
  complete:false
  },
  {
  task: "learn React",
  id:Date.now(),
  complete:false
  }

]














class App extends React.Component {
  constructor() {
    super();
    this.State{
      todos: 
    }
  }
  handleItemToggle = (itemId) =>{
    this.setState({
      todos:this.state.todos.map(item =>{
        if(item.id ===itemId){
          return{
            ...item,
            complete:!item.completed
          }
        }else {
          return (item)
        }
      })
    })
  }

  handleItemAdd = (itemName) => {
    const todo ={
      task: itemName,
      id: Date.now(),
      completed:false
    }
    const newTodos =[...this.state.todos, todo]
    this.setState({
      todos:newTodos
    })
  }
    handleItemCompleted =() =>{
      const newTodos = this.state.todos.filter(todo =>{
        return (!todo.completed)
      })
      this.setState({
        todos:newTodos
      })
    }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to George's Todo App!</h2>
        <TodoForm handleItemCompleted={this.handleItemCompleted} handleItemAdd={this.handleItemAdd} handleItemAdd={this.handleItemAdd} handleItemToggle ={this.handleItemToggle}/>
        <TodoList handleItemCompleted= {this.handleItemCompleted } todos={this.state.todos}} handleItemToggle={this.handleItemToggle}
      </div>
    );
  }
}

export default App;
