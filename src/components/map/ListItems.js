import React from 'react'

function ListItems(props) {
  return (
    <>
    <ol>
      {
        props.value.map((vari,index)=>(
          <li key={index}>{vari}</li>
        ))
      }
      </ol>
      <ol>
      {
        props.motor.map((init,index)=>(
          <li key={index}>{init}</li>
        ))
      }
    </ol>
    </>
  )
}

export default ListItems