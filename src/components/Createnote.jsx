import React, { useState } from 'react'
import "../App.css"
const Createnote = ({onAdd}) => {
  
  const [note,setNote] = useState({
    title:"",
    content:""
  })

  const handleChange= (e)=>{
     const {name ,value} = e.target
      // console.log(name , value)
     setNote({
      ...note,
      [name]:value
     })
     console.log(note)

  }
  const submitNote =(e)=>{
        e.preventDefault()
      
        note.title !="" && (
          onAdd(note)
       )
      
       setNote({
        title:"",
        content:""
      })
  }
  return (
    <>
       <form>
        <input name='title' value={note.title} onChange={handleChange} placeholder="Title" required/>
        <textarea name='content' value={note.content} onChange={handleChange} placeholder="content" required/>
        <button onClick={submitNote}>Add</button>
       </form>
    </>
  )
}

export default Createnote
