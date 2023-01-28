import { useState } from 'react'
import './App.css'
import Createnote from './components/Createnote'
import Navbar from './components/Navbar'
import Note from './components/Note'

function App() {

  const [notes,setNotes] = useState([])

const addNote =(newNote)=>{
   setNotes([...notes,newNote])
}
console.log(notes)

const deleteNote =(id)=>{
  setNotes(notes.filter((note,index)=>{
       return index !== id
  }))
}
  return (
  <>
      <Navbar/>
      <div className="App">
      <div className="all-notes">
          <Createnote onAdd={addNote}/>
      { notes.map((note,i)=>{
              return(
                <Note title={note.title} content={note.content} key={i} id={i} onDelete={deleteNote} />
              )
            })}
      </div>
      </div>
  </>
  )
}            

export default App
// {notes.map((note,index) )}
