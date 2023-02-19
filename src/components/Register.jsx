import React, { useState } from 'react'
import "../styles/register.css"

const Register = () => {
    const [user,setUser]= useState({name:"",email:"",pass:""});
    const handleChange = (e)=>{
       const {name,value}=e.target;
       setUser({...user,[name]:value}) 
    }
    const handleSubmit=()=>{
        fetch("https://tan-kind-earthworm.cyclic.app/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
          .then(res=>{
            console.log(res)
           alert(res.msg)
        })
          .catch(err=>console.log(err))
    }
  return (
    <div id="reg">
        <h1 id="heading">Register</h1>
        <div id="form">
            <input className="input" type="text" id="name" name="name" placeholder="Name"  onChange={handleChange}/>
            <br />
            <input className="input" type="text" id="email" name="email" placeholder="Email" onChange={handleChange}/>
            <br />
            <input className="input" type="password" id="pass" name="pass" placeholder="Password" onChange={handleChange}/>
            <br />
            <button className="input" id="btn" onClick={handleSubmit}>Register</button>
        </div>
    </div>
  )
}

export default Register