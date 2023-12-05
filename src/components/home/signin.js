import React, { useState } from 'react'

function SignUp() {
  const[input,setInput]=useState(
    {
      username:'',
      password:'',
    }
  );
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setInput((prevData)=>(
        {
            ...prevData,[name]:value,
        }
    ));
}

  const handleValidate=(e)=>{
    e.preventDefault();
    if(input.username==="ram@gmail.com"&&input.password==="Ram"){
      alert("SignIn successfully");
    }
    else{
      alert("failed to signIn");
    }
  }
  return (
    <div>
        <h1>SignIn</h1>
        <form onSubmit={handleValidate}>
        <label>Username: <input type='text' name='username' value={input.username} onChange={handleChange}/></label><br/>
        <label> Password: <input type='password' name='password' value={input.password} onChange={handleChange}/></label><br/>
        <button type='submit'>SignIn</button>
        </form>
    </div>
  )
}

export default SignUp