import React, { useState } from 'react'

const DeleteNotes = () => {
    const [ID,setId]=useState();

    const handleChange=(e)=>{
        setId(e.target.value)
    }
    const handleSubmit=()=>{
        fetch(`https://tan-kind-earthworm.cyclic.app/notes/delete/${ID}`,{
          method:"DELETE",
          headers:{
              "Authorization":localStorage.getItem("token")
          },
      }).then(res=>res.json())
      .then(res=>{
          console.log(res)
          alert(res.msg)
      })
      .catch(err=>console.log(err))
      }

  return (
    <div id="reg">
        <div>
            <h1 id="heading">Delete Notes</h1>
        </div>
        <div id="form">
            <input className="input" type="text" id="id" name="id" placeholder="Notes ID" onChange={handleChange}/><br/>
            <button className="input" id="btn" onClick={handleSubmit}>Delete</button>
        </div>
        
    </div>
  )
}

export default DeleteNotes