// http://expressjs.com/pt-br/advanced/best-practice-performance.html
// https://www.npmjs.com/package/serverless-api-compression
// https://github.com/awslabs/aws-serverless-express/issues/99
const path = require('path'),
  express = require('express'),
  compression = require('compression'),
  awsServerlessExpress = require('aws-serverless-express');

import fs from 'fs';

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';

import Main from './index';

const app = express(),
  mimeTypes = [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'application/x-font-ttf',
    'application/x-font-woff',
    'application/font-woff',
    'application/font-woff2',
    'application/xml',
    'font/eot',
    'font/woff',
    'font/opentype',
    'font/otf',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/x-icon',
    'text/comma-separated-values',
    'text/css',
    'text/html',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml',
  ];

app.use(awsServerlessExpressMiddleware.eventContext());

app.set('x-powered-by', false);
app.use(compression());

app.get('/event', (req, res) => {
  res.json(req.apiGateway.event);
});

// https://expressjs.com/pt-br/starter/static-files.html
app.use('/assets', express.static('./www/assets'));

app.get('**', function(req, res) {
  const context = {};

  const styleSheet = new ServerStyleSheet();

  const renderHtml = renderToString(
    styleSheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <Main />
      </StaticRouter>
    )
  );

  const helmet = Helmet.renderStatic();
  const style = styleSheet.getStyleTags();

  let html = fs.readFileSync('./www/index.html', 'utf8');

  html = html.replace('<!--title-->', helmet.title.toString());
  html = html.replace('<!--meta-->', helmet.meta.toString());
  html = html.replace('<!--link-->', helmet.link.toString());
  html = html.replace('<!--style-->', style);

  html = html.replace('<!--html-->', renderHtml);

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url,
    });
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  }
});

const server = awsServerlessExpress.createServer(app, null, mimeTypes);

export const handler = function(event, context) {
  return awsServerlessExpress.proxy(server, event, context);
};
