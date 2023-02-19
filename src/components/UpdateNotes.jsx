import React, { useState } from 'react'

const UpdateNotes = () => {
    const [id,setId]=useState();
    const [payload,setPayload]=useState({});

    const handleChange=(e)=>{
        setId(e.target.value)
    }
    const handleChange2=(e)=>{
        let {name,value}=e.target;
        setPayload({...payload,[name]:value})
    }
    const handleSubmit=()=>{
        fetch(`https://tan-kind-earthworm.cyclic.app/notes/update/${id}`,{
          method:"PATCH",
          headers:{
              "Content-Type":"application/json",
              "Authorization":localStorage.getItem("token")
          },
          body:JSON.stringify(payload)
      }).then(res=>res.json())
        .then(res=>{
          console.log(res)
          alert(res.msg)
        }).catch(err=>console.log(err.message))
      }

  return (
    <div id="reg">
        <div>
            <h1 id="heading">Update Notes</h1>
        </div>
        <div id="form">
            <input className="input" type="text"  name="id" placeholder="Notes ID" onChange={handleChange}/><br/>
            <input className="input" type="text"  name="title" placeholder="Title" onChange={handleChange2}/><br/>
            <input className="input" type="text"  name="body" placeholder="Body" onChange={handleChange2}/><br/>
            <button className="input" id="btn" onClick={handleSubmit}>Update</button>
        </div>
        
    </div>
  )
}

export default UpdateNotes