import React from 'react'

function child({onMessage}) {
  return (
    <div>
        <h1>this is child component</h1>
        <button onClick={()=>{onMessage('Hey I am child message')}}>click me</button>
    </div>
  )
}

export default child