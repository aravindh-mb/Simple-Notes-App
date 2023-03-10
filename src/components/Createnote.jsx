import React, { useState } from 'react'
import "../App.css"
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


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
      
        note.title !="" && note.content !="" && (
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
        <TextField id="outlined-basic" label="Title" variant="standard" name='title'
         value={note.title} onChange={handleChange} placeholder="Title"  />
       
       <br/><br/><br/>

        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          name='content' value={note.content} onChange={handleChange} placeholder="content"
        />

        <br/><br/><br/>

        <Button variant="contained" onClick={submitNote}>Add</Button>
       </form>
    </>
  )
}

export default Createnote
