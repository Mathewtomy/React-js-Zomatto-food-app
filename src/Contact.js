import React from "react";
import styles from './contact.css'; 
export default function Contact(){
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
    return(
<div>
    <div> <h1 style={myStyle}>Contact </h1></div>
<h1 style={{color: "red",backgroundColor:"lightcoral"}}>Plz fill the page</h1>
<h3 className="bigblue">Hello Car!</h3>;

</div>
    );
}