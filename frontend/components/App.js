import React from 'react'
import axios from "axios"
import TodoList from "./TodoList"
import Form from "./Form"

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:9000/api/todos")
    .then((response) => {
      console.log(response.data.data)
      this.setState({
        ...this.state.todo,
        todo: response.data.data
      })
    })
  } 

  addChore = (newChore) => {
    console.log("chore added");
    axios.post("http://localhost:9000/api/todos", newChore)  
    .then((response) => {
      console.log(response.data);
      this.setState({
        todo: [
          ...this.state.todo,
          response.data.data
        ]
      })
      console.log(newChore);
      
    }) 
    .catch((error) => {
      console.log(error)
    })
  }
  
  toggleItem = (itemId) => {
    console.log("Itemid:", itemId)
    axios.patch(`http://localhost:9000/api/todos/${itemId}`)
    .then((response) => {
      console.log(response.data.data)
      this.setState({
        ...this.state.todo,
        todo: this.state.todo.map((item) => {
          if (itemId === item.id) {
            return response.data.data
          } else {
            return item
          }
        })
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
        <Form 
          addChore={this.addChore}
        />
      </div>

    )
  }
}

