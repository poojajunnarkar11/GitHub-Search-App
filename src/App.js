import React, { Component } from 'react'
import Form from './Form'
import { CardList } from './CardList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userList: [
        {
          avatar_url: 'https://avatars2.githubusercontent.com/u/15823037?v=4',
          name: 'Pooja Junnarkar',
          company: 'Copart'
        }
      ]
    }
  }
  findNewUsers = newUsers => {
    this.setState({ userList: [newUsers] })
  }
  render() {
    return (
      <div>
        <Form submitReferenceFunc={this.findNewUsers} />
        <CardList userList={this.state.userList} />
      </div>
    )
  }
}

export default App
