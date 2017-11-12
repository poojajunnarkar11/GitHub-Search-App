import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userName}`).then(response => {
      this.props.submitReferenceFunc(response.data)
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ margin: '1em' }}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
        />
        <button type="submit">Find User</button>
      </form>
    )
  }
}
export default Form
