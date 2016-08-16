import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import App from './components/app';

if (typeof document !== 'undefined') {
  render(
    <App />,
    document.getElementById('app')
  );
}

// Update this in the future to handle when we start compiling the css. For now
// this will do.
const html =
  '<!DOCTYPE html>' +
  '<html>' +
      '<head>' +
          '<meta charset="utf-8">' +
          '<title>Aaron Williams</title>' +
          '<link rel="stylesheet" href="css/skeleton.css" />' +
          '<link rel="stylesheet" href="css/custom.css" />' +
          '<link rel="stylesheet" href="css/font-awesome.min.css" />' +
      '</head>' +
      '<body>' +
          renderToString(<App />) +
      '</body>' +
  '</html>';

export default (locals, callback) => {
  callback(null, html);
};
