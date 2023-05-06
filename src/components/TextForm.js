import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase","Success");
    }

    const handleLoClick = () => {
        //console.log("LowerCase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase","Success");
    }

    const handleClearClick = () => {
        //console.log("ClearText was clicked: " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "Success");
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        //console.log("i am a copy");
        var text = document.getElementById("myBox");
        text.select();
        //text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "Success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "Success");
    }

    const [text, setText] = useState('');
    //setText("new text");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1 >{props.heading}  </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Removing Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>

    )
}
