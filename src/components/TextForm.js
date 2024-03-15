import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  const [text, setText] = useState('');
  return (
    <>
        <div className='container'>
        <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter the text'></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
       </div>

       <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words are {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
    </>
  )
}
