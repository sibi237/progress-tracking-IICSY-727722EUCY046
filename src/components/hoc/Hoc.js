import React, {Component} from 'react';
 
const withLogger =(WrappedComponent)=>{
    return class extends Component{
        componentDidMount()
        {
            console.log('Component ${WrappedComponent.name} is mounted');
         }
         render()
         {
          return<WrappedComponent{...this.props}/>;
    }
};
};
class MyComponent extends Component{
    render()
    {
        return<div>My Component</div>;
    }
}

const EnhancedComponent = withLogger(MyComponent);

const HOC=()=>
{
    return(
        <div>
        <h1>Higher-Order Component Example </h1>
        <EnhancedComponent/>
        </div>
    )   
};
export default HOC;