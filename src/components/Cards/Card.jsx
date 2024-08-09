import React from "react";
import contacts from "./contacts";
function Card(props){
    return <div className="card">
        <div className="top">
            <h1>{props.name}</h1>
            <img src ={props.imgURL} alt="abbas image" />
        </div>
        <div className="bottom">
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
        
    </div>
}
export default Card;