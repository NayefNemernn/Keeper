import { useState } from 'react'
import './App.css'
import CreateArea from './components/CreateArea'
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'
import notes from './notes'


function App() {

  const [notes, setNotes] = useState([])



  function addNote(newnote){
    setNotes(prevNotes => {
      return [...prevNotes, newnote];
    })
 

  }
  function delNote(id){
    console.log("deleted");

  }

  return (
    <>
    <Header />
    <CreateArea onadd = {addNote}/>
  
    {notes.map((noteitem) => <Note title = {noteitem.title} content = {noteitem.content} ondelete = {delNote} />)}

      <Footer />
    </>
  )
}

export default App
