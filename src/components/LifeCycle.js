import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={value:'Initial value'};
        console.log(constructor);
    }
    componentDidMount(){
        console.log('Component did mount');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Component did update');
    }
    componentWillUnmount(){
        console.log('Component will unmount');
    }
    handleClick=()=>{
        this.setState({value:'Updated value'});
    }
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.handleClick}>update</button>
      </div>
    )
  }
}
