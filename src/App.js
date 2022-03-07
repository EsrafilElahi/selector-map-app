import React from "react";
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

  // useEffect(() => {
  //   // android
  //   if (isAndroid) {
  //     const url =
  //       "intent://maps.google.com/#Intent;scheme=https;package=com.google.android.apps.maps;end";
  //     window.location.replace(url);
  //   }
  //   // ios
  //   else if (isIOS) {
  //     window.location.replace("instagram://");

  //     setTimeout(() => {
  //       window.location.replace(
  //         "https://apps.apple.com/us/app/instagram/id389801252"
  //       );
  //     }, 10000);
  //   } else {
  //     // window.location.replace("https://www.google.com/maps");
  //   }
  // }, []);

  const mapsSelector = () => {
    if (isIOS)
      window.open("maps://maps.google.com/maps?daddr=lat,long&amp;ll=");
    else {
      window.open("https://maps.google.com/maps?daddr=lat,long&amp;ll=");
    }
  };

  return (
    <div className="container">
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
      <div>{isMobile && "is mobile view"}</div>
      <div>{isBrowser && "is browser view"}</div>
      <button onClick={mapsSelector}>open map</button>

      {isAndroid ? (
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android"
          target="_blank"
        >
          open google play google map
        </a>
      ) : isIOS ? (
        <a
          href="https://apps.apple.com/id/app/google-maps-transit-food/id585027354"
          target="_blank"
        >
          open apple store google map
        </a>
      ) : (
        <a
          href="https://maps.google.com/maps"
          target="_blank"
        >
          open browser google map
        </a>
      )}

      <a href="https://balad.ir/#10/35.6725/51.4181" target="_blank">
        balad browser map
      </a>
      <a
        href="https://neshan.org/maps/@35.689200,51.389000,11.0z,0.0p"
        target="_blank"
      >
        neshan browser map
      </a>
    </div>
  );
};

export default App;
