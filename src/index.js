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

export default (locals, callback) => {
  callback(null, locals.template({ html: renderToString(<App />) }));
};
