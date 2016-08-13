import React from 'react';

export default class WelcomeMessage extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className="intro">
          <h1>
            Hello, I'm <span className="text-theme-orange">Aaron</span>.
            I'm a full-stack Software Engineer at
            <span className="text-theme-red"> Bluetel Solutions</span>.
          </h1>
        </div>
      </div>
    );
  }
};
