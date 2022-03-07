import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <span>for android map</span>
      <a href="geo:37.786971,-122.399677" target="_blank">
        open map
      </a>

      <span>for ios map</span>
      <a
        href="comgooglemaps://?center=40.765819,-73.975866&zoom=14&views=traffic"
        target="_blank"
      >
        open map 1
      </a>
      <a href="comgooglemaps://?center=3.1357,101.6880&zoom=14" target="_blank">
        open map 2
      </a>
    </div>
  );
};

export default App;
