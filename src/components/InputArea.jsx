import React, {useState} from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }

      function confirmation () {
        props.addItem(inputText); 
        setInputText("");
      }



  return (
    <div className="form">
      <input onChange={handleChange} 
      onKeyDown={
        (event) => event.code === "Enter" ? confirmation() : null
      } 
      type="text" value={inputText} />
      <button onClick={confirmation}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
