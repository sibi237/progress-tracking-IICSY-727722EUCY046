import React from 'react'
import './App.css'
import img from "./image/demo.jpeg"

const App = () => {

  const handle=()=>{
    alert("welcome\nhii");
  }
  return ( 
    <>
    <h1 className="clg">
        SKCET
    </h1>
    <div className="logo">
        <img src={img} alt="demo"/>

    </div>
    <h1 className="name">
        SABARI
    </h1>
    <p className="dept">
        cyber security department

    </p>
    <p className='link'>
        for more information please visit 
        <a target="_blank" href="https://www.skcet.ac.in/" rel="noreferrer">
           skcet.ac.in
        </a>
    </p>
    <button className='btn' onClick={handle}>click here to see magic</button>
    </>
    )

}



export default App