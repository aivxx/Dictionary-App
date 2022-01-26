import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001e65608eb64ed4361916f5583804b05d4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionaryApp">
      <div className="container">
        <h1> Dictionary </h1>

        <div className="form">
          <form onSubmit={search}>
            <h3> What's the word?</h3>
            <input
              type="search"
              placeholder="Search"
              onChange={handleKeywordChange}
            />
            <div className="suggested">
              <p>suggested: cat, love, culture, music</p>
            </div>{" "}
          </form>
        </div>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
