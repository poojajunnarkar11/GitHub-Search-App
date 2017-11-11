import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div style={{ margin: '1em' }}>
        <input type="text" placeholder="GitHub username" />
        <button type="submit">Find User</button>
      </div>
    )
  }
}
export default Form
