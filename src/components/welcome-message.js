import React from 'react';

export default class WelcomeMessage extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className="intro">
          <h1>
            Hi, I'm <span className="text-theme-orange">Aaron</span>, a full-stack Software Engineer from
            <span className="text-theme-red"> Birmingham </span>
            with a passion for Cloud Architecture.
          </h1>
        </div>
      </div>
    );
  }
};
