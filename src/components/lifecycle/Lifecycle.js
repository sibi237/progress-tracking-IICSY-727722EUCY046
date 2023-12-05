import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props)
    {
        super(props);
        this.state = {value:"Intial"};
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentDidUpdate(){
        console.log("Component update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    handleclick = () =>
    {
        this.setState({value:"updated value"})
    }
  render() {
    return (
      <div>
      <p>{this.state.value}</p>
      <button onClick={this.handleclick}>updated value</button>
      </div>
    )
  }
}