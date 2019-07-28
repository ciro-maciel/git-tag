import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Flex, Box } from "rebass";

import Home from "../containers/Home";
import Users from "../containers/Users";

const HttpStatus = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

const NotFound = () => (
  <HttpStatus code={404}>
    <Flex justify="center" style={{ height: "100%" }}>
      <Flex wrap width={1024}>
        <Box width={1} style={{ textAlign: "center" }}>
          <h1>Sorry, can’t find that.</h1>
          <p>
            Go to <Link to={"/"}>Home</Link>
          </p>
        </Box>
      </Flex>
    </Flex>
  </HttpStatus>
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
