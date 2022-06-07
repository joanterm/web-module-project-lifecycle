import React from 'react'

export default class Todo extends React.Component {

  toggleItemWithId = () => {
    this.props.toggleItem(this.props.todo.id)
  }
  render() {
    const {todo} = this.props
    return (
      <div onClick={this.toggleItemWithId}>
        <h1>{todo.name}</h1>
        {todo.completed ? " ✔️" : ""}
      </div>
    )
  }
}
