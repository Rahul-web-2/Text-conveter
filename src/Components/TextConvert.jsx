import React, { useState, useEffect } from 'react'

export default function TextConvert(props) {
    const [text, setText] = useState("")
    useEffect(() => {
        document.title = "Text Convert";
    }, []);

    const handleUp = () => {
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" : Converted to UpperCase", "success")
    }

    const handleLo = () => {
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" : Converted to LowerCsae", "success")
    }

    const handleSc = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
        props.showAlert(" : Converted to  Sentence Case", "success")
    }

    const handleRe = () => {
        setText("")
        props.showAlert(" : Textarea is Reset", "success")
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    

    return (
        <>
            <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
            <div className="mb-4">
                <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUp}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLo}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSc}>Sentence Case</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleRe}>Reset</button>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p> {text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters </p>
            </div>

            <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>MORE FUNCTION ARE UNDER WORK.😃</h1>
        </>
    );
}
//style={{ color: props.mode === 'dark' ? 'red' : 'black' }}