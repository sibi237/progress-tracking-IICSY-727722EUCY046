import React, { Component } from 'react'

export default class TimeOut extends Component {
  constructor(props){
    super(props)
    this.interval=null;
  }
    componentDidMount(){
        setTimeout(()=>{
            alert('ad....')
        },5);
    }
    componentWillUnmount(){
      clearInterval(this.interval);
    }
  render() {
    return (
      <div></div>
    )
  }
}
