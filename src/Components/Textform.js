import React ,{useState} from 'react'

export default function Textform(props) {
  // <button type="button" class="btn btn-success my-3" onClick={changeInotUpperCase}>Change Into Uppercase</button>
 let changeIntoUpperCase = () =>{ 
  console.log("you have clicked change to upper case"); 
    let newText = Text.toUpperCase();
    setText(newText);
  }
  let changeIntoLowerCase=()=>{
    let newText = Text.toLowerCase();
    setText(newText);
  }
  let handleonchange = (event) =>{
    console.log("hand change");
    setText(event.target.value)
  }
  let clearText = ()=>{
    setText("");
  }
  let removeExSpace=() =>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  let copyText = () =>{
    let Text = document.getElementById('textform');
     Text.select();
    navigator.clipboard.writeText(Text.value);
  }
  let removeExDot = () =>{
    let newText = Text. split(".").join(" ");
    setText(newText)
  }

  const [Text, setText] = useState("Enter text here")

  return (
     <>
     <div className='container'>
         <form>
          <label htmlFor=" " className='h2 my-3'>{props.title}</label>
         <textarea className="form-control h-100" cols="100" rows="10" placeholder="Leave a comment here" onChange={handleonchange}  id="textform" value={Text}></textarea>
         <button type="submit" className="btn btn-success mx-3 my-3" onClick={changeIntoUpperCase}>Change Into Uppercase</button>
         <button type="submit" className="btn btn-success mx-3 my-3" onClick={changeIntoLowerCase}>Change Into Lowercase</button>
         <button type="submit" className="btn btn-success mx-3 my-3" onClick={clearText}> Clear</button>
         <button type="submit" className="btn btn-success mx-3 my-3" onClick={copyText}> Copy </button>
         <button type="submit" className="btn btn-success mx-3 my-3" onClick={removeExSpace}> Remove extra Space</button>
         <button type="submit" className="btn btn-success mx-3 my-3" onClick={removeExDot}> Remove extra Dot</button>
         </form>
     </div>
     </>
  )
}
