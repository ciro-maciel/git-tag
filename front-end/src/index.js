import React from 'react';
import { Provider } from 'react-redux';

import Routes from './middleware/routes';
import store from './middleware/store';

// if (
//     process.env.NODE_ENV &&
//     process.env.NODE_ENV === "production" &&
//   "serviceWorker" in navigator
// ) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker
//       .register(process.env.PUBLIC_URL + "/worker.js")
//       .then(function(registration) {
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       })
//       .catch(function(err) {
//         console.log("ServiceWorker registration failed: ", err);
//       });
//   });
// }

const Main = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

// const Main = () => (
//   <div>
//     sdsds
//   </div>
// );

export default Main;
