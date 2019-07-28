import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import XRay from 'react-x-ray';

import { Flex, Box } from 'rebass';

import { I18nProvider } from '../containers/i18n';
import Home from '../containers/Home';
import Users from '../containers/Users';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

// https://reacttraining.com/react-router/web/guides/server-rendering/404-401-or-any-other-status
const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

const NotFound = () => (
  <Status code={404}>
    <Flex justifyContent="center" alignItems="center" style={{ height: '100%' }}>
      <Flex wrap width={1024}>
        <Box width={1} style={{ textAlign: 'center' }}>
          <h1>Sorry, can’t find that.</h1>
          <p>
            Go to <Link to={'/'}>Home</Link>
          </p>
        </Box>
      </Flex>
    </Flex>
  </Status>
);

const RoutesSwitch = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/repository/:repositoryName" render={() => <div>{props.match.params.repositoryName}</div>} />
    <Route component={NotFound} />
  </Switch>
);

const Routes = () => (
  <I18nProvider>
    <React.Fragment>
      <GlobalStyle />
      <XRay disabled={false} color={'#e5a87d'} backgroundColor={'#004d84'} style={{ height: '100%' }}>
        <RoutesSwitch />
      </XRay>
    </React.Fragment>
  </I18nProvider>
);
// const Routes = () => (
//   <I18nProvider>
//     <React.Fragment>
//       <GlobalStyle />
//       {process.env.NODE_ENV && process.env.NODE_ENV !== "production" ? (
//         <XRay
//           disabled={true}
//           color={"#e5a87d"}
//           backgroundColor={"#004d84"}
//           style={{ height: "100%" }}
//         >
//           <RoutesSwitch />
//         </XRay>
//       ) : (
//         <RoutesSwitch />
//       )}
//     </React.Fragment>
//   </I18nProvider>
// );

export default Routes;
