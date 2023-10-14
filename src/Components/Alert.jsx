import React from "react";

export default function Alert(props) {
  const first_capital = (word)=>{
    return (word.charAt(0).toUpperCase()+word.slice(1))
  }
  return (
    props.alertMsg && (
      <div>
        <div className={`alert alert-${props.alertMsg.type}`} role="alert">
          <strong>
            {first_capital(props.alertMsg.type)} : {props.alertMsg.msg}
          </strong>
        </div>
      </div>
    )
  );
}
