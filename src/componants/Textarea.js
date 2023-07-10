import React, {useState} from 'react';

export default function Textarea(props) {
  const [Text, setText] = useState('');

  const handleText = (e) => {
  
    setText(e.target.value)

  }

  let clean = Text.split(" ").filter(function(elm) 
  {
    return elm !== "";
  })

  const handleSpeak = () =>
  {
          let msg = new SpeechSynthesisUtterance();
          msg.text = Text;
          window.speechSynthesis.speak(msg)
  }
  const handleUpClick = () =>
  {
    const NewText = Text.toUpperCase();
    setText(NewText);
    props.showAlert("Text Convert in Uppercase" , "success")

  }

  const handleLoClick = () =>
  {
    const NewText = Text.toLowerCase();
    setText(NewText);
    props.showAlert("Text Convert in Lowercase" , "success")

  }

  const handleClear = () =>
  {
    setText("")
    props.showAlert("Text clear" , "success")

  }

  const handleReverse = () =>
  {
    let StrArr = Text.split("");
    console.log(StrArr)
    StrArr = StrArr.reverse()
    const NewText = StrArr.join("");
    setText(NewText);
    props.showAlert("Text Reverse" , "success")

  }

  const handleCopy = () =>
  {
    var text = document.getElementById("box")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copy in Clipboard" , "success")

  }

  const removeExtraspace = () =>
  {
    let NewText = Text.split(/[  ]+/);
    setText(NewText.join(" "))
    props.showAlert("Remove Extra Space" , "success")

  }
  return (
    <div className='container'>
    <div>
        <h1 className='pb5 hed' style={{color:props.mode === 'light' ? 'black' : 'primary' ? 'blue' : 'dark' ? 'white' : 'white'}}>{props.hed}</h1>
       <textarea className="form-control" value={Text} rows="8" style={{backgroundColor:props.mode === 'light' ? 'white' : 'primary'? '#bde0fe' : 'black' , color: props.mode === 'light' ? 'black'  : 'primary'? 'blue' :  'white' }} onChange={handleText} id='box'></textarea>
       <div className='btngroup'>
        <button disabled={Text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary' ? 'primary' : 'dark'} my-3 py-2 mx-1`} onClick={handleUpClick}>Change On Uppercase</button>
        <button  disabled={Text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary' ? 'primary' : 'dark'} my-3 py-2 mx-1`}  onClick={handleLoClick}>Change On Lowercase</button>
        <button  disabled={Text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary' ? 'primary' : 'dark'} my-3 py-2 mx-1`}  onClick={handleClear}>Clear Text</button>
        <button  disabled={Text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary' ? 'primary' : 'dark'} my-3 py-2 mx-1`}  onClick={handleSpeak}>Speak</button>
        <button  disabled={Text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary' ? 'primary' : 'dark'} my-3 py-2 mx-1`}  onClick={handleReverse}>Reverse</button>
        <button  disabled={Text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary' ? 'primary' : 'dark'} my-3 py-2 mx-1`}  onClick={handleCopy}>Copy</button>
        <button  disabled={Text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'primary' ? 'primary' : 'dark'} my-3 py-2 mx-1`}  onClick={removeExtraspace}>Remove Extra Space</button>
       </div>
    </div>
    <div style={{color:props.mode === 'light' ? 'black' : 'primary' ? 'blue' : 'dark' ? 'white' : 'white' }}>
        <p >Total Word : <span>{clean.length}</span> Total Character <span>{Text.length}</span></p>
        <p >Time to Read Word : <span>{(0.008*clean.length).toFixed(2)}</span> Minutes</p>
    </div>
    <div style={{color:props.mode === 'light' ? 'black' : 'primary' ? 'blue' : 'dark' ? 'white' : 'white' }}>
        <h4>Preview : </h4>
        <p >{Text.length>0 ? Text : "Enter text in Textbox for view Priview"}</p>
    </div>
    </div>

  );
}
