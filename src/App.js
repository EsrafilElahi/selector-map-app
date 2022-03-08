import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <span>For Android Platform</span>
      <a href="geo:37.786971,-122.399677" target="_blank" rel="noreferrer">
        Open Map
      </a>

      <hr />

      <span>For IOS platform</span>
      <a
        href="geo:37.786971,-122.399677;u=35"
        target="_blank"
        rel="noreferrer"
      >
        Open Map 1
      </a>
      <a
        href="//maps.apple.com/?q=Raleigh,NC"
        target="_blank"
        rel="noreferrer"
      >
        Open Map 1 , 1
      </a>
      <a
        href="https://maps.apple.com/maps?q=addressgoeshere"
        target="_blank"
        rel="noreferrer"
      >
        Open Map 1 , 2
      </a>      
      <a
        href="comgooglemaps-x-callback://?center=40.765819,-73.975866&zoom=14"
        target="_blank"
        rel="noreferrer"
      >
        Open Map 1 , 2
      </a>
      <a
        href="comapplemaps://?center=3.1357,101.6880&zoom=14"
        target="_blank"
        rel="noreferrer"
        className="a2"
      >
        Open Map 2
      </a>

      <hr />

      <span>For Web Platform</span>
      <a
        href="https://www.google.com/maps/@35.7583817,51.4000924,14z"
        target="_blank"
        rel="noreferrer"
      >
        Open Map 2
      </a>

    </div>
  );
};

export default App;
