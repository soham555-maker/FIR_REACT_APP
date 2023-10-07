import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textfield(prop) {
  const [text, setText] = useState("");
  let wordsCnt = text.split(" ").length
  let minuts = 0;
  let seconds = 0;
  text.split(" ").forEach(element => {
    if (element === ""){
        wordsCnt -=1;
    };
  });
  minuts = Math.floor((0.85*wordsCnt)/60);
  seconds = Math.floor((0.85*wordsCnt)%60);
  let minCnt = 50*5;
  if (minCnt>text.length){
    minCnt=text.length;
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

  return (
    <div>
      <div className="container">
        <h1>{prop.heading}</h1>
        <div className="mb-0">
          <textarea
            className="form-control my-4"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="enter your text here"
            value={text}
            onChange={onChangeTextArea}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={onHandleUpperCase}
          >
            Transform to UPERCASE.
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={onHandleLowerCase}
          >
            Transform to lowercase.
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>
            The above text has {wordsCnt} words and {text.length} characters.<br/>
            Also, an slow reader requires {minuts} minutes and {seconds} seconds to read.
        </p>
        <h2>Preview</h2>
        <p>{text.slice(0| {minCnt})}</p>
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
