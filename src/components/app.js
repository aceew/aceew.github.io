import React from 'react';
import WelcomeMessage from './welcome-message';
import IconsRow from './icons-row';
import Footer from './footer';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <WelcomeMessage />
        <IconsRow />
        <Footer />
      </div>
    );
  }
};
