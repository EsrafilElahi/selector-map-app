import React, { useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isAndroid,
  isIOS,
} from "react-device-detect";
import "./App.css";



// window.location = 'geo:40.765819,-73.975866'

const App = () => {
  useEffect(() => {
    if (isAndroid) {
      const url =
        // "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";
        "intent://maps.google.com/#Intent;scheme=https;package=com.google.android.apps.maps;end";

      window.location.replace(url);
    } else if (isIOS) {
      window.location.replace("instagram://");

      setTimeout(() => {
        window.location.replace(
          "https://apps.apple.com/us/app/instagram/id389801252"
        );
      }, 10000);
    } else {
      window.location.replace("https://instagram.com");
    }
  }, []);

  const mapsSelector = () => {
    if (isIOS)
      window.open("maps://maps.google.com/maps?daddr=lat,long&amp;ll=");
    else {
      window.open("https://maps.google.com/maps?daddr=lat,long&amp;ll=");
    }
  };

  return (
    <div className="App">
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
      <div>{isMobile && "mobiles"}</div>
      <div>{isBrowser && "browsers"}</div>
      <button onClick={mapsSelector}>open map</button>

      {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
          Open Android app
        </a>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/instagram/id389801252">
          Open iOS app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )}
    </div>
  );
};

export default App;
