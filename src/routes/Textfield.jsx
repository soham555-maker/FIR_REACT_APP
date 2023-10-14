import React, { useState } from "react";
import { Form, useOutletContext } from "react-router-dom";
import Alert from "../Components/Alert";
import "../App.css";

export default function Textfield() {
  const [mainStyle] = useOutletContext();
  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

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
    showAlert("Converted to UPPERCASE.", "success");
  };
  const onHandleLowerCase = () => {
    // console.log("onHandleUpperCase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase.", "success");
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
    showAlert("Copied for text area to clipboard.", "success");
  };
  const onHandleRmvExtSpaces = () => {
    let textArr = text.split(" ");
    var newText = "";
    textArr.forEach((element) => {
      if (element !== "") {
        newText = newText + element + " ";
      }
    });
    setText(newText);
    showAlert("Removed extra spaces.", "success");
  };
  const onHandleClear = () => {
    setText("");
    showAlert("Cleared the Textarea.", "success");
  };

  return (
    <div>
      <Alert alertMsg={alert} />
      <div className="container my-3 my-2" style={mainStyle}>
        <h1>Enter the text to be Transformed</h1>
        <div className="mb-0">
          <textarea
            className="form-control my-4"
            id="myInput"
            rows="12"
            placeholder="enter your text here"
            value={text}
            onChange={onChangeTextArea}
            style={mainStyle}
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
      <div className="container my-1" style={mainStyle}>
        <h2>Your text summary</h2>
        <p>
          The above text has {wordsCnt} words and {text.length} characters.
          <br />
          Also, an slow reader requires {minuts} minutes and {seconds} seconds
          to read.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text.slice(0 | { minCnt })
            : `Enter your Text above to preview it here`}
        </p>
      </div>
    </div>
  );
}
