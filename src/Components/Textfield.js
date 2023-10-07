import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textfield(prop) {
  const [text, setText] = useState("");
  const onHandleUpperCase = () => {
    // console.log("onHandleUpperCase clicked");
    let newText = text.toUpperCase();
    setText(newText)
  };
  const onChangeTextArea = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{prop.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
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
          className="btn btn-primary"
          onClick={onHandleUpperCase}
        >
          Transform to UPERCASE.
        </button>
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
