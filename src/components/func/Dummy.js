import React from "react";
import ReactDOM  from "react-dom/client";

export default class Dummy extends React.Component{
    render(){
        return <h1>this is {this.props.color} flavour ice cream</h1>;

    }
}
const container =document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<Dummy color="red velvet"/>);
