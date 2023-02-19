import React, { useState } from 'react'
import "../styles/login.css"

const Login = () => {
  const [user,setUser]= useState({name:"",email:""});
    const handleChange = (e)=>{
       const {name,value}=e.target;
       setUser({...user,[name]:value}) 
    }
    const handleSubmit=()=>{
        fetch("https://tan-kind-earthworm.cyclic.app/users/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
          .then(res=>{
            console.log(res)
            localStorage.setItem("token",res.token)
           alert(res.msg)
        })
          .catch(err=>console.log(err))
    }
  return (
    <div id="reg">
        <div>
            <h1 id="heading">Login Here</h1>
        </div>
        <div id="form">
            <input className="input" type="text" id="email" name="email" placeholder="Email" onChange={handleChange} />
            <br />
            <input className="input" type="password" id="pass" name="pass" placeholder="Password" onChange={handleChange} />
            <br />
            <button className="input" id="btn" onClick={handleSubmit}>Login</button>
        </div>
        
    </div>
  )
}

export default Login