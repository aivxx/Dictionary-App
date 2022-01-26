import React from "react";

import "./Results.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg"
          alt="soundIcon"
        />
      </a>
      <span className="phoneticText">{props.phonetic.text}</span>
    </div>
  );
}
