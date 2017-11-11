import React from 'react'
import { Card } from './Card'

export const CardList = props => (
  <div>
    {props.userList.map(user => <Card {...user} />)}
  </div>
)
