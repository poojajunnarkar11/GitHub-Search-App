import React, { Component } from 'react'
import Form from './Form'
import { CardList } from './CardList'
import { UserList } from './constants/UserList'

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <CardList userList={UserList} />
      </div>
    )
  }
}

export default App
