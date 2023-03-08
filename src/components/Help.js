import React from 'react';
import { Link } from 'react-router-dom';
import "./Help.css"

export const Help = () => {
    return (
        <>
        <button onClick={helpdoc_popup} className="help-button" type="button">
            ?
        </button>
        <h3 className="helpdoc">
            Help Documentation:
        </h3>
        </>
    )
}





function helpdoc_popup (){
    var helpdoc = document.getElementsByClassName("helpdoc");
    helpdoc.style.display = "block";
    console.log("toggle on")
}