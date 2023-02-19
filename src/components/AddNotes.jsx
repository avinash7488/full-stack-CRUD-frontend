import React, { useState } from 'react'
import "../styles/addNotes.css"
import DeleteNotes from './DeleteNotes';
import UpdateNotes from './UpdateNotes';

const AddNotes = () => {
  const [note,setNote]= useState({title:"",body:""});
    const handleChange = (e)=>{
       const {name,value}=e.target;
       setNote({...note,[name]:value}) 
    }
    const handleSubmit=()=>{
      fetch("https://tan-kind-earthworm.cyclic.app/notes/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(note)
    }).then(res=>res.json())
    .then(res=>{
        console.log(res)
        alert(res.msg)
    })
    .catch(err=>console.log(err))
    }
  return (
    <div >
        <div className="reg">
            <h1 id="heading">Create Notes</h1>
        
     
            <input className="input" type="text" id="title" name="title" placeholder="Title" onChange={handleChange}/><br/>
            <input className="input" type="text" id="body" name="body" placeholder="Body" onChange={handleChange}/><br/>
            <button className="input" id="btn" onClick={handleSubmit}>Create</button>
        </div>

        <div >
          <UpdateNotes/>
        </div>
        <div>
          <DeleteNotes/>
        </div>
        
    </div>
  )
}

export default AddNotes