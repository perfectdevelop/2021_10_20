import React from 'react';

import "./index.scss";
// import LoaderGIF from "./../../../../assets/images/pictures/icons/Loader.gif";
// const LoaderGIF = require(window.location.origin + "./../../../../assets/images/pictures/icons/Loader.gif");
import LoaderGIF from "./../../../../assets/images/pictures/icons/Loader.gif";

console.log("CGI", LoaderGIF);
// import  imageToBase64  from 'image-to-base64';

export default function Loader({ display }: { display: boolean }): JSX.Element {


  // imageToBase64("./../../../../assets/images/pictures/icons/Loader.gif")
  // .then(
  //     (response) => {
  //         console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
  //     }
  // )
  // .catch(
  //     (error) => {
  //         console.log(error); // Logs an error if there was one
  //     }
  // )

  return (
    <div className={`loader ${display ? "" : "loader-fade-out"}`}>
      <div className="l-content">
        {/* <img src={ LoaderGIF } alt="loader" /> */}
        <img src={ LoaderGIF } alt="loader" />
        </div>
    </div>
  );
}


// const imageToBase64 = require('image-to-base64');
// //or
// //import imageToBase64 from 'image-to-base64/browser';

