import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" , text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to UpperCase","success")
  };
  const handleloClick = () => {
    // console.log("lowercase was clicked" , text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to LowerCase","success")
  };
  const handleClearClick = () => {
    // console.log("ClearClick was clicked" , text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success")
  };

  const handleCpClick = () => {
    // console.log("ClearClick was clicked" , text);
    


    let str = text;

//split the above string into an array of strings 
//whenever a blank space is encountered

let arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
let str2 = arr.join(" ");
console.log(str2);
setText(str2);
props.showAlert("Text is Capitalized","success")

//Outptut: I Have Learned Something New Today
  };

  const handleCopyClick = () => {
    // console.log("ClearClick was clicked" , text);
    let copyText = text;
    // copyText.select();
    //     copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText);
       

    // setText(("Copied the text: " + copyText));

    // function myFunction() {
    //     var copyText = document.getElementById("myInput");
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999);
    //     navigator.clipboard.writeText(copyText.value);
        
    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copied: " + copyText.value;
    //   }
      
    //   function outFunc() {
    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copy to clipboard";
    //   }
    props.showAlert("Copied to Clipboard","success")
  };
  
  


  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text=newText; [Wrong way to change the state]
  // setText('newText');

  return (
    <>
      
      <div className="container"  style={{color: (props.mode ==='dark'? 'white':'black')}}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode ==='dark'? 'grey':'white', color: props.mode ==='dark'? 'white':'black'}}
            id="my box"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-2 "
          onClick={handleUpClick}
        >
          Covert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 "
          onClick={handleloClick}
        >
          Covert to lowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 "
          onClick={handleCpClick}
        >
          Capitalize
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 "
          onClick={handleCopyClick}
        >
          Copy to Clickboard
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2 "
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        
       
      </div>

        <div className="container my-3" style={{color: (props.mode ==='dark'? 'white':'black')}} >
            <h3>
                Your Text Summary
            </h3>
            <p>
                {text.split(" ").length-1} words and {text.length} characters
            </p>
            <p>
                {0.008 * text.split(" ").length} Minutes Read
            </p>
            <h3> Preview</h3>
            <p>{text.length>0?text:"Enter Something to preview"}</p>

        </div>



    </>
  );
};

export default TextForm;
