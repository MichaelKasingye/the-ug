import React from "react";
import "../style/input.css";

function Input(props) {
  return (
    <div className="input_data">
      <input
        className="input"
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
