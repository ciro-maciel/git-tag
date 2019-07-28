import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { injectGlobal } from "styled-components";

import Routes from "./structure/routes";
import store from "./structure/store";

injectGlobal`
	*{
		box-sizing: border-box;
	}

	html,
	body, 
	#container {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	html {
		color: #666665;
		font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
		font-size: 12px;
	}
`;

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("container")
);
