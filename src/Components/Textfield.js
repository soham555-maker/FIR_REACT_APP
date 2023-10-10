import React, { useState } from "react";
import PropTypes from "prop-types";
// import copy from "../../node_modules/copy-descriptor";

export default function Textfield(props) {
  const [text, setText] = useState("");
  let wordsCnt = text.split(" ").length;
  let minuts = 0;
  let seconds = 0;
  text.split(" ").forEach((element) => {
    if (element === "") {
      wordsCnt -= 1;
    }
  });
  minuts = Math.floor((0.85 * wordsCnt) / 60);
  seconds = Math.floor((0.85 * wordsCnt) % 60);
  let minCnt = 50 * 5;
  if (minCnt > text.length) {
    minCnt = text.length;
  }
  const onHandleUpperCase = () => {
    // console.log("onHandleUpperCase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onHandleLowerCase = () => {
    // console.log("onHandleUpperCase clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onChangeTextArea = (event) => {
    setText(event.target.value);
  };
  const onHandleCopy = () => {
    let copyText = document.getElementById("myInput");
    copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
  };
  const onHandleRmvExtSpaces = () => {
    let textArr = text.split(" ");
    var newText = "";
    textArr.forEach((element) => {
      if (element !== "") {
        newText = newText + element + " ";
      }
      // console.log(element)
      // newText += element + " ";
    });
    // console.log(newText);
    setText(newText);
  };
  const onHandleClear = () => {
    setText("");
  };

  return (
    <div>
      <div className="container my-3 my-2" style={props.mainStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-0">
          <textarea
            className="form-control my-4"
            id="myInput"
            rows="12"
            placeholder="enter your text here"
            value={text}
            onChange={onChangeTextArea}
            style={props.mainStyle}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary mx-1 my-2"
            onClick={onHandleUpperCase}
          >
            UPERCASE
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={onHandleLowerCase}
          >
            lowercase
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1 my-2"
            onClick={onHandleCopy}
          >
            Copy Text
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1 my-2"
            onClick={onHandleRmvExtSpaces}
          >
            Remove Extra Spaces.
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1 my-2"
            onClick={onHandleClear}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-1" style={props.mainStyle}>
        <h2>Your text summary</h2>
        <p>
          The above text has {wordsCnt} words and {text.length} characters.
          <br />
          Also, an slow reader requires {minuts} minutes and {seconds} seconds
          to read.
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text.slice(0 | {minCnt}):`Enter your Text above to preview it here`}</p>
      </div>
    </div>
  );
}

Textfield.PropTypes = {
  heading: PropTypes.string,
};

Textfield.defaultProp = {
  heading: "Enter the text",
};
