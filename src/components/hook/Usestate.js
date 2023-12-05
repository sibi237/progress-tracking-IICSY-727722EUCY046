import React,{useState} from "react";
const Hh=()=>{
    const [count, setCount]=useState(0);
    return (
        <div style={{textAlign:"center"}}>
        <p> count: {count}</p>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count>0?count-1:0)}>decrement</button>
        </div>
    )
}
export default Hh;