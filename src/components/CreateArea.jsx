import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "", 
        content: ""
    })

    function handlechange(event){
        const {name, value} = event.target;
        
        setNote( prevNote => {
            return {
                ...prevNote, 
                [name]: value
            }
        } );

    }

    function submitNote(event){
        props.onadd(note)
        event.preventDefault();
    }

    return <div>
        <form action="">
            <input name="title" onChange={handlechange} value={note.title} placeholder="Title" />
            <textarea name="content" onChange={handlechange} value={note.content} placeholder="Take a Note... " rows={3}/>
            <button onClick= {submitNote} >add</button>
        </form>
    </div>
      
}
export default CreateArea;