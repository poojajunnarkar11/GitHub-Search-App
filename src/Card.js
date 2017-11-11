import React from 'react'
export const Card = props => (
  <div style={{ margin: '2em' }}>
    <img src={props.avatar_url} height="75px" width="70px" alt="User Avatar" />
    <div style={{ display: 'inline-block', marginLeft: 10 }}>
      <div>{props.name}</div>
      <div>{props.company}</div>
    </div>

  </div>
)
