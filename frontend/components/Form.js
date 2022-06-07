import React from 'react'
export default class Form extends React.Component {
  constructor() {
    super()
    this.state= {
      formValue: ""
    }
  }
  handleChange = (e) => {
    const {value} = e.target
    this.setState({
      ...this.state,
      formValue: value
    })   
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      name: this.state.formValue,
      id: Date.now(),
      completed: false
  }
    this.props.addChore(newTodo) 
    this.setState({
      ...this.state,
      formValue: ""
    }) 
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="add new chore"
            name="formValue"
            value={this.state.formValue}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    )
  }
}
