import React, { useState } from 'react'
import "../styles/notes.css"

const Notes = () => {
  const[notes,setNotes]=useState([]);

  const handleSubmit=()=>{
    fetch("https://tan-kind-earthworm.cyclic.app/notes/",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            },
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setNotes(res)
        })
        .catch(err=>console.log(err))
  }
  return (
    <div id="notes">
        <h1>Click here to get all the notes</h1>
        <button id="btn" onClick={handleSubmit}>Get Notes</button>
        <div>

          {notes.length===0?<h1>No any notes</h1>:notes.map((el)=><div key={el.title}>
            <h3>{el.title}</h3>
            <p>{el.body}</p>
          </div>)}
        </div>
    </div>
  )
}

export default Notes