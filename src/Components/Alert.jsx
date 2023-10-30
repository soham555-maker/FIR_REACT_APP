import React from "react";
import "./Alert.css"

export default function Alert(props) {
  const first_capital = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.alertMsg && (
      // <div>
      //   <div className={`alert alert-${props.alertMsg.type}`} role="alert">
      //     <strong>
      //       {first_capital(props.alertMsg.type)} : {props.alertMsg.msg}
      //     </strong>
      //   </div>
      // </div>
      <div class="wrapper">
        <div class="no-data float">
          <i class="fa fa-caret-left fa-md arrow"></i>
          <p>
            <i class="fa fa-warning"></i>{props.alertMsg.msg}
          </p>
        </div>
      </div>
    )
  );
}
