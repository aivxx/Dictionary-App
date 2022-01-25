import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionaryApp">
      <div className="container">
        <h1> Dictionary </h1>
        <h3> What's the word?</h3>
        <secton className="form">
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
        </secton>
      </div>
      <Results results={results} />
    </div>
  );
}
