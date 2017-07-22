import React from 'react';

export default class Footer extends React.Component {
  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <div className='footer'>
        <div className='one-third column'>&nbsp;</div>
        <div className='one-third column'>
          <p className='copyright-footer'>© Aaron Williams { this.getYear() }</p>
        </div>
      </div>
    );
  }
};
