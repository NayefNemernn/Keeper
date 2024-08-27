import React from "react";

function Note(props){

    function handleclick(){
        props.ondelete();

    }

    return <> 
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={handleclick}>Delete</button>
    </div>
    </>
}
export default Note;