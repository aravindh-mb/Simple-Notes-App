<<<<<<< HEAD
import React from 'react'

import "../App.css"

const Note = (props) => {

  const remove=(e)=>{
    props.onDelete(props.id)
    // console.log(props.id+1)
  }
  return ( 
    // <div className="note-container">
      <div className="note">
          <p id="node-id">Note : {props.id+1}{console.log(props.id)}</p>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <button onClick={remove}>Delete</button>
    </div>
    // </div>
  )
}

=======
import { Button } from '@mui/material'
import React from 'react'

import "../App.css"

const Note = (props) => {

  const remove=(e)=>{
    props.onDelete(props.id)
    // console.log(props.id+1)
  }
  return ( 
      <div className="note">
          <p id="node-id">Note : {props.id+1}{console.log(props.id)}</p>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
         
          <div className="Button">
                <Button style={{color:"red",backgroundColor:"white"}}  variant="contained" onClick={remove}>Delete</Button>
          </div>

      </div>
  )
}

>>>>>>> ff69c35 (Designed using Material UI)
export default Note