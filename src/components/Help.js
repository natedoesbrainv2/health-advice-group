import React, {Component} from 'react';
import "./Help.css"

class Help extends Component{
    render(){    
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
}

export default Help;



function helpdoc_popup (){
    var helpdoc = document.getElementsByClassName("helpdoc");
    helpdoc.style.display = "block";
    console.log("toggle on")
}