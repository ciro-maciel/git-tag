import React from "react";
import { render } from "react-dom";

import { BrowserRouter, HashRouter } from "react-router-dom";

import Main from "./index";

// https://github.com/facebookincubator/create-react-app/issues/1765
// https://reacttraining.com/react-router/web/api/HashRouter
render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("container")
);
