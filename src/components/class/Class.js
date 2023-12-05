import React, { Component } from 'react'
import img from './image/demo.jpeg'
export default class Class extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
    
      handleIncrement = () => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      };
    
      handleDecrement = () => {
        if(this.state.count>0){
            
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        }
      };
  render() {
    return (
        <>
        <table>
        <tbody>
            <tr>
                <th>
                    <img src={img}/>
                </th>
                <th>
                    SABARI
                </th>
                <th>
                    <button onClick={this.handleIncrement}>Increment</button>
                </th>
                <th>
                    <h1>Count: {this.state.count}</h1>
                </th>
                <th>
                    <button onClick={this.handleDecrement}>Decrement</button>
                </th>
                </tr>
        </tbody>
        </table>
        </>
    )
  }
}
