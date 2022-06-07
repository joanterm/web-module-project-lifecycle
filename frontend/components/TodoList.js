import React from 'react'
import Todo from "./Todo"
export default class TodoList extends React.Component {
  constructor(props) {
    console.log("TodoList props:", props); 
    super()
  }
  
  render() {
    return (
      <div>
        {this.props.todo.map((item) => (
          <Todo 
            key={item.id}
            todo={item}
            toggleItem={this.props.toggleItem}
          />
        ))}
      </div>
    )
  }
}
